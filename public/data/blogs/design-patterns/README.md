# Design Patterns

A while ago I started reading a book about *Design Patterns*. Now I've read it, I thought it was time to summarize the differences between *<abbr title="Object Oriented">OO</abbr>* and *procedural* programming in a way most people will understand.

For this example[^1] I'll use a visitor which is logged in on a website, who wants to read a news item, which is only available for registered members, first the procedural style:

```php
<?php
    // Connect to the database
    // ... a pile of HTML for the rest of the page
    // ... and some code to check if there's a session or cookie
    if ($_COOKIE['logged_in'] == true) {

        // Retrieve the item from the database, using the id given with the URL
        $result = pg_query("SELECT title, author, content FROM news WHERE id = " . $_GET['id']);

        // Loop through the results, in this case just one row is returned by the database
        while ($item = pg_fetch_assoc($result)) {

            // We want to know who posted the item and of course the item itself
            // HTML and PHP are mixed in the same file
            echo '&lt;h1&gt;' . $item['title'] . '&lt;/h1&gt;';
            echo $item['author'] . '&lt;br&gt;';
            echo '&lt;article&gt;' . $item['content'] . '&lt;/article&gt;';
        }
    }
?>
```

For a website which has just one page, the code above will be a perfect solution. However, when one wants to add a second page, the same code has to be used. For example on a photo album, here too it's about a picture only a registered member is allowed to see:

```php
<?php
    // Connect to the database
    // ... a pile of HTML for the rest of the page
    // ... and some code to check if there's a session or cookie
    if ($_COOKIE['logged_in'] == true) {

        // Retrieve the item from the database, using the id given with the URL
        $result = pg_query("SELECT title, author, photo FROM pictures WHERE id = " . $_GET['id']);

        // Loop through the results, in this case just one row is returned by the database
        while ($item = pg_fetch_assoc($result)) {

            // We want to know who posted the item and of course the item itself
            // HTML and PHP are mixed in the same file
            echo '&lt;h1&gt;' . $item['title'] . '&lt;/h1&gt;';
            echo $item['author'] . '&lt;br&gt;';
            echo '&lt;img src="' . $item['photo'] . '"&gt;';
        }
    }
?>
```

As you can see, only a small change is needed, the rest of it is *duplicate code*. With only two pages there's not much damage done, but tomorrow of course there will come another page, and another... If you want to support comments on your website, which are almost equal on every page, this code has to be added on each of the four pages. The copy and pasting won't hurt, but bugs always appear afterwards, so you have to edit this code on the four locations. For websites with hundreds of pages, this just is no option. With OO this problem is solved. In this example I will be using the <abbr title="Model View Controller">MVC</abbr> pattern.

The Model is used to connect to the database. It pulls data from and puts data into this database. It also deals with the logic behind this data. A <abbr title="The number of seconds since the Linux epoch: 1 january 1970">timestamp</abbr> is converted to a readable date or time format. And it checks user input, so no strange content can appear on the website and it protects the website against hacks.

The View is used to display the data on screen, this is the only place where <abbr title="Hyper Text Markup Language">HTML</abbr> (and sometimes <abbr title="Cascading Style Sheets">CSS</abbr>) is used. In most cases the HTML for markup and CSS for styling is separated in different files. Which is a good habit to keep the code clean.

The Controller is in between the Model and View like some sort of negotiator. For example, it makes sure only permitted users can view certain data.

In the example below I'll use this MVC pattern to refactor the procedural code. First the Models, with a <abbr title="A collection of related methods">class</abbr> which acts like an <abbr title="Some sort of super class which defines which methods a class should contain">interface</abbr>, with a standard method and an abstract method, this abstract method doesn't do anything, but every class that extends this class, should overrule this method. Every Model has to contain a database connection, so this functionality is put in the constructor. The constructor is automatically called when a class is initialized, or when an <abbr title="Instance of a class">object</abbr> is created.

```php
<?php
    // All Models 'extend' this class, so all Models automatically contain the connect() method
    // This one has to be written just once. When the database password changes, this has to be 
    // altered on one location
    class Model {

        public function __construct() {
            // Some code to connect...
        }

        public abstract function getData($id);
    }
?>
```

```php
<?php
    class ModelNews extends Model {

        // The controller picks all variables that are specified in the URL, in this case
        // the id, and uses them to call this method
        public function getData($id) {
            $result = pg_query("SELECT title, author, content FROM news WHERE id = " . $id);

            // Loop through the results, in this case just one row is returned by the database
            while ($item = pg_fetch_assoc($result)) {

                // No HTML needed here. An array is returned that all Views can understand
                $data[0]['title'] = $item['title'];
                $data[0]['author'] = $item['author'];
                $data[0]['content'] = $item['content'];
            }
            return $data;
        }
    }
?>
```

```php
<?php
    class ModelPhotos extends Model {
        public function getData($id) {
            $result = pg_query("SELECT title, author, photo FROM pictures WHERE id = " . $id);
            while ($item = pg_fetch_assoc($result)) {
                $data[0]['title'] = $item['title'];
                $data[0]['author'] = $item['author'];
                $data[0]['photo'] = $item['photo'];
            }
            return $data;
        }
    }
?>
```

Looking at the Models, we have pretty much the same code, but the HTML is separated and the Models only have to know how the database is set up. Next we have the Views:

```php
<?php
    class View {
        public function __construct() {
            // A pile of HTML...
        }

        // Every View has to have the option to show the output on screen
        public function show($data) {

            // First loop through the array
            while ($data) {

                // Then make sure every field is displayed, in this case title; author and content
                while ($data[$i]) {

                    echo '&lt;h1&gt;' . $data[$i][$j] . '&lt;/h1&gt;';
                    echo $data[$i][$j];
                    echo '&lt;article&gt;' . $data[$i][$j] . '&lt;/article&gt;';
                }
            }
        }
    }
?>
```

```php
<?php
    class ViewNews extends View {}
?>
```

```php
<?php
    class ViewPhotos extends View {}
?>
```

The ViewNews and ViewPhotos classes can be kept small, because they inherit their functionality from the main View class. When one of the Views needs some extra functionality, it can be easily edit by overruling the show() method. Also, other methods can be added. Last but not least, the Controllers:

```php
<?php
    class Controller {
        public function run() {
            // The Model and View are initialized
            $model = new Model();
            $view = new View();

            // The data from the Model is passed to the View
            $view-&gt;show($model-&gt;getData($_GET['id']));
        }
    }
?>
```


```php
<?php
    class ControllerNews extends Controller {}
?>
```

```php
<?php
    class ControllerPhotos extends Controller {}
?>
```

The Controllers also can be kept small, because the `run()` method is inherited. When initializing the Model and View only the right title has to be passed, so that ModelNews and ViewNews are called when ControllerNieuws is called. The same story goes for the ModelPhotos; ViewPhotos and ControllerPhotos. The Controller class can handle this, so no other code is needed for ControllerNews en ControllerPhotos.

The number of lines is pretty much the same, but with bigger websites one can get lost in the first example. But actually the article is about Design Patterns. Some basic principles of OO from *Head First Design Patterns*.

---

## OO Principles:

* <abbr title="A strategy which allows pieces of software to only release information about themselves that is strictly necessary">Encapsulate</abbr> what varies
* Favor composition over <abbr title="A class inherits properties, methods and procedures from a parent class">inheritance</abbr>
* Program to interfaces, not to implementations
* Strive for loosely coupled design between objects that interact
* Classes should be open to additions, but closed for alterations
* Depend upon <abbr title="Omitting non-essential information or aspects to show more fundamental structures">abstractions</abbr>. Do not depend upon concrete classes
* Only talk to friends
* Don't call us, we call you
* A class should have only one reason to change it
* Another keyword: <abbr title="Having classes and interfaces of the same outline, but with different implementations. Meaning, the naming of operations or methods. This is an important factor to get the most from object oriented programming">polymorphism</abbr>.

Some situations don't allow the use of all principles, so they have to be compromised, that's where Design Patterns come in. These are solutions for these situations, used a lot by other developers, so these patterns are docoumented a lot. The patterns get a title which allows developers world whide to use the same vocabulary.

## OO Patterns (Design Patterns):

### Creational patterns

* **Abstract factory**[^2] Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
* **Builder**[^2] Separate the construction of a complex object from its representation, allowing the same construction process to create various representations.
* **Factory method**[^2] Define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses (dependency injection).
* **Lazy initialization** Tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed. This pattern appears in the GoF catalog as "virtual proxy", an implementation strategy for the Proxy pattern.
* **Multiton** Ensure a class has only named instances, and provide a global point of access to them.
* **Object pool** Avoid expensive acquisition and release of resources by recycling objects that are no longer in use. Can be considered a generalisation of connection pool and thread pool patterns.
* **Prototype**[^2] Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.
* **Resource acquisition is initialization** Ensure that resources are properly released by tying them to the lifespan of suitable objects.
* **Singleton**[^2] Ensure a class has only one instance, and provide a global point of access to it.
* **Object library** Encapsulate object management including factory interface with live and dead lists.

### Structural patterns

* **Adapter or Wrapper or Translator**[^2] Convert the interface of a class into another interface clients expect. An adapter lets classes work together that could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator.
* **Bridge**[^2] Decouple an abstraction from its implementation allowing the two to vary independently.
* **Composite**[^2] Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
* **Decorator**[^2] Attach additional responsibilities to an object dynamically keeping the same interface. Decorators provide a flexible alternative to subclassing for extending functionality.
* **Facade**[^2] Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.
* **Flyweight**[^2] Use sharing to support large numbers of similar objects efficiently.
* **Front controller** The pattern relates to the design of Web applications. It provides a centralized entry point for handling requests.
* **Marker** Empty interface to associate metadata with a class.
* **Module** Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity.
* **Proxy**[^2] Provide a surrogate or placeholder for another object to control access to it.
* **Twin** Twin allows modeling of multiple inheritance in programming languages that do not support this feature.

### Behavioral patterns

* **Blackboard** Artificial intelligence pattern for combining disparate sources of data (see blackboard system)
* **Chain of responsibility**[^2] Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.
* **Command**[^2] Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
* **Interpreter**[^2] Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
* **Iterator**[^2] Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
* **Mediator**[^2] Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.
* **Memento**[^2] Without violating encapsulation, capture and externalize an object's internal state allowing the object to be restored to this state later.
* **Null object** Avoid null references by providing a default object.
* **Observer or Publish/subscribe**[^2] Define a one-to-many dependency between objects where a state change in one object results in all its dependents being notified and updated automatically.
* **Servant** Define common functionality for a group of classes.
* **Specification** Recombinable business logic in a Boolean fashion.
* **State**[^2] Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.
* **Strategy**[^2] Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
* **Template method**[^2] Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
* **Visitor**[^2] Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.

### Concurrency patterns

* **Active Object** Decouples method execution from method invocation that reside in their own thread of control. The goal is to introduce concurrency, by using asynchronous method invocation and a scheduler for handling requests.
* **Balking** Only execute an action on an object when the object is in a particular state.
* **Binding properties** Combining multiple observers to force properties in different objects to be synchronized or coordinated in some way.
* **Block chain** Decentralized way to store data and agree on ways of processing it in a Merkle tree, optionally using Digital signature for any individual contributions.
* **Double-checked locking** Reduce the overhead of acquiring a lock by first testing the locking criterion (the 'lock hint') in an unsafe manner; only if that succeeds does the actual locking logic proceed. Can be unsafe when implemented in some language/hardware combinations. It can therefore sometimes be considered an anti-pattern.
* **Event-based asynchronous** Addresses problems with the asynchronous pattern that occur in multithreaded programs.
* **Guarded suspension** Manages operations that require both a lock to be acquired and a precondition to be satisfied before the operation can be executed.
* **Join** Join-pattern provides a way to write concurrent, parallel and distributed programs by message passing. Compared to the use of threads and locks, this is a high-level programming model.
* **Lock** One thread puts a "lock" on a resource, preventing other threads from accessing or modifying it.
* **Messaging design pattern (MDP)** Allows the interchange of information (i.e. messages) between components and applications.
* **Monitor object** An object whose methods are subject to mutual exclusion, thus preventing multiple objects from erroneously trying to use it at the same time.
* **Reactor** A reactor object provides an asynchronous interface to resources that must be handled synchronously.
* **Read-write lock** Allows concurrent read access to an object, but requires exclusive access for write operations.
* **Scheduler** Explicitly control when threads may execute single-threaded code.
* **Thread pool** A number of threads are created to perform a number of tasks, which are usually organized in a queue. Typically, there are many more tasks than threads. Can be considered a special case of the object pool pattern.
* **Thread-specific storage** Static or "global" memory local to a thread.

[^1]: The examples are solely for illustrational purposes
[^2]: These patterns are found in Head First: Design Patterns
