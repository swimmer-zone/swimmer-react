# Anti Patterns

**This is a first concept of this post, updates are pending**

## Table of Contents

* [Software Design](#software-design)
* [Object Oriented Programming](#object-oriented-programming)
* [Programming](#programming)
* [Methodological](#methodological)
* [Configuration Management](#configuration-management)

There has been a long silence on my website, but now it's time to post a couple of things. I transferred my blog from a database to a text-based system, using the Markdown syntax. I can use my favorite text-editor, Sublime Text. That may encourage me to write more. First, a long awaited blog:

An anti-pattern is a common response to a recurring problem that is usually ineffective and risks being highly counterproductive.

According to the authors of Design Patterns, there must be at least two key elements present to formally distinguish an actual anti-pattern from a simple bad habit, bad practice, or bad idea:

1. A commonly used process, structure, or pattern of action that despite initially appearing to be an appropriate and effective response to a problem, has more bad consequences than good ones.
2. Another solution exists that is documented, repeatable, and proven to be effective.

There are organizational examples and also project management suffers from anti-patterns, but in this article I'll highlight just the anti-patterns in software engineering. For a full list, visit [this page on Wikipedia](https://en.wikipedia.org/wiki/Anti-pattern).

This blog post will be alive, which means that I'm planning to post regular updates to put more and more detailed descriptions of the several patterns.

## Software Design

### [Abstraction inversion](https://en.wikipedia.org/wiki/Abstraction_inversion)

is an anti-pattern arising when users of a construct need functions implemented within it but not exposed by its interface. The result is that the users re-implement the required functions in terms of the interface, which in its turn uses the internal implementation of the same functions. This may result in implementing lower-level features in terms of higher-level ones, thus the term 'abstraction inversion'.

Possible ill-effects are:
* The user of such a re-implemented function may seriously underestimate its running-costs.
* The user of the construct is forced to obscure their implementation with complex mechanical details.
* Many users attempt to solve the same problem, increasing the risk of error.

Ways to avoid this anti-pattern include:
* If your system offers formally equivalent functions, choose carefully which to implement in terms of the other.
* Do not force unnecessarily weak constructs on your users.
* Choose your infrastructure carefully.

### [Ambiguous viewpoint](https://en.wikipedia.org/wiki/Ambiguous_viewpoint)
Object Oriented Analysis and Design models are often presented without clarifying the viewpoint represented by the model. By default, these models denote an implementation viewpoint that visualises the structure of a computer program. Mixed viewpoints do not support the fundamental separation of interfaces from implementation details, which is one of the primary benefits of the object-oriented paradigm.

In Object Oriented Analysis and Design there are three viewpoints: The business viewpoint (the information that is domain specific and matters to the end user), the specification viewpoint (which defines the exposed interface elements of a class), and the implementation viewpoint (which deals with the actual internal implementation of the class). If the viewpoint becomes mixed then these elements will blend together in a way which makes it difficult to separate out and maintain the internals of an object without changing the interface, one of the core tenets of Object Oriented Analysis and Design.

### [A big ball of mud](https://en.wikipedia.org/wiki/Big_ball_of_mud)
is a software system that lacks a perceivable architecture. Although undesirable from a software engineering point of view, such systems are common in practice due to business pressures, developer turnover and code entropy. They are a type of design anti-pattern.

The overall structure of the system may never have been well defined. If it was, it may have eroded beyond recognition. Programmers with a shred of architectural sensibility shun these quagmires. Only those who are unconcerned about architecture, and, perhaps, are comfortable with the inertia of the day-to-day chore of patching the holes in these failing dikes, are content to work on such systems.

Programmers in control of a big ball of mud project are strongly encouraged to study it and to understand what it accomplishes, and to use this as a loose basis for a formal set of requirements for a well-designed system that could replace it. Technology shifts, such as client-server to web-based or file-based to database-based, may provide good reasons to start over from scratch.

### [Database-as-IPC](https://en.wikipedia.org/wiki/Database-as-IPC)
is an anti-pattern where a database is used as the message queue for routine interprocess communication in a situation where a lightweight IPC mechanism such as sockets would be more suitable. Using a database for this kind of message passing is extremely inefficient compared to other IPC methods and often introduces serious long-term maintenance issues, but this method enjoys a measure of popularity because the database operations are more widely understood than &quot;proper&quot; IPC mechanisms.

### [Gold plating](https://en.wikipedia.org/wiki/Gold_plating_(project_management))
in project management, or time management in general, is a term used to describe the error of working on a project or task past the point of diminishing returns. For example: after having met the requirements, the project manager or the developer works on further enhancing the product, thinking the customer will be delighted to see additional or more polished features, rather than what was asked for or expected. The customer might be disappointed in the results, and the extra effort by the developer might be futile.

Gold plating is also considered a bad project management practice for different project management best practices and methodologies such as Project Management Body of Knowledge (PMBOK) and PRINCE2. In this case, 'gold plating' means the addition of any feature not considered in the original scope plan (PMBOK) or product description (PRINCE2) at any point of the project. This is because it introduces a new source of risks to the original planning such as additional testing, documentation, costs, or timelines. However, gold plating does not prevent new features from being added to the project; they can be added at any time as long as they follow the official change procedure and the impact of the change in all the areas of the project is taken into consideration.

### [The Inner-platform effect](https://en.wikipedia.org/wiki/Inner-platform_effect)
is the tendency of software architects to create a system so customizable as to become a replica, and often a poor replica, of the software development platform they are using. This is generally inefficient and such systems are often considered to be examples of an anti-pattern.

Examples are visible in plugin-based software such as some text editors and web browsers which often have developers create plugins that recreate software that would normally run on top of the operating system itself. The Firefox add-on mechanism has been used to develop a number of FTP clients and file browsers, which effectively replicate some of the features of the operating system, albeit on a more restricted platform.

In the database world, developers are sometimes tempted to bypass the RDBMS, for example by storing everything in one big table with three columns labelled entity ID, key, and value. While this entity-attribute-value model allows the developer to break out from the structure imposed by an SQL database, it loses out on all the benefits,[1] since all of the work that could be done efficiently by the RDBMS is forced onto the application instead. Queries become much more convoluted,[2] the indexes and query optimizer can no longer work effectively, and data validity constraints are not enforced. Performance and maintainability can be extremely poor.

Another example is the phenomenon of web desktops, where a whole desktop environment—often including a web browser—runs inside a browser (which itself typically runs within the desktop environment provided by the operating system). A desktop within a desktop can be unusually awkward for the user, and hence this is generally only done to run programs that cannot easily be deployed on end user systems, or by hiding the outer desktop away.

It is normal for software developers to create a library of custom functions that relate to their specific project. The inner-platform effect occurs when this library expands to include general purpose functions that duplicate functionality already available as part of the programming language or platform. Since each of these new functions will generally call a number of the original functions, they tend to be slower, and if poorly coded, less reliable as well.[citation needed]

On the other hand, such functions are often created to present a simpler (and often more portable) abstraction layer on top of lower level services that either have an awkward interface, are too complex, non-portable or insufficiently portable, or simply a poor match for higher level application code.

An inner platform can be useful for portability and privilege separation reasons—in other words, so that the same application can run on a wide variety of outer platforms without affecting anything outside a sandbox managed by the inner platform. For example, Sun Microsystems designed the Java platform to meet both of these goals.

### [Input kludge](https://en.wikipedia.org/wiki/Input_kludge)
is a type of failure in software (an anti-pattern) where simple user input is not handled. For example, if a computer program accepts free text input from the user, an ad hoc algorithm will mishandle many combinations of legal and illegal input strings. Input kludges are usually difficult for a programmer to detect in a unit test, but very easy for the end user to find. The evidence exists that the end user can easily crash software that fails to correctly handle user input. Indeed, the buffer overflow security hole is an example of the problems caused.

To remedy input kludges, one may use input validation algorithms to handle user input. A monkey test can be used to detect an input kludge problem. A common first test to discover this problem is to roll one's hand across the computer keyboard or to 'mash' the keyboard to produce a large junk input, but such an action often lacks reproducibility. Greater systematicity and reproducibility may be obtained by using fuzz testing software.

### [Interface bloat](https://en.wikipedia.org/wiki/Interface_bloat)
is when a interface incorporates too many operations on some data into an interface, only to find that most of the objects cannot perform the given operations.

Interface bloat is an example of an anti-pattern. One might consider using visitor pattern, Adapter Pattern, or interface segregation instead.

### [Magic pushbutton](https://en.wikipedia.org/wiki/Magic_pushbutton)
consists of a system partitioned into two parts: user interface and business logic, that are coupled through a single point, clicking the "magic pushbutton" or submitting a form of data. As it is a single point interface, this interface becomes over-complicated to implement. The temporal coupling of these units is a major problem: every interaction in the user interface must happen before the pushbutton is pressed, business logic can only be applied after the button was pressed. Cohesion of each unit also tends to be poor: features are bundled together whether they warrant this or not, simply because there is no other structured place in which to put them.

In a modern system, i.e. one where processing is cheap and competing interface standards are high, users should simply not be left to enter data for long periods without some automatic interaction to guide, validate, or to tailor the system according to the developing state of the data they've so far entered. Leaving them alone to &quot;just get on with it&quot;, then validating everything at the end, means that the corrections needed will be detected further and further from when that data was entered. As an a priori principle, corrections needed should be highlighted as soon and as close to when they are either entered, or could first be identified.

In an event-driven interface, most events triggered by the &quot;completion&quot; of a field will present an opportunity to either validate that field, or to guide the choices for entering the next. They may even control which field the user is taken to next: sub-sections of a form are often made relevant or irrelevant by values entered early on, and users should not need to manually skip these, if it can be done for them.

In this scenario, the programmer draws the user interface first and then writes the business logic in the automatically created methods.

### [a race hazard](https://en.wikipedia.org/wiki/Race_hazard)
is the behavior of an electronics, software, or other system where the output is dependent on the sequence or timing of other uncontrollable events. It becomes a bug when events do not happen in the order the programmer intended.

Race conditions can occur especially in logic circuits, multithreaded or distributed software programs.

Many software tools exist to help detect race conditions in software. They can be largely categorized into two groups: static analysis tools and dynamic analysis tools.

### [Stovepipe system](https://en.wikipedia.org/wiki/Stovepipe_system)
is a pejorative term for a system that has the potential to share data or functionality with other systems but which does not. The term evokes the image of stovepipes rising above buildings, each functioning individually. A simple example of a stovepipe system is one that implements its own user IDs and passwords, instead of relying on a common user ID and password shared with other systems.

Stovepipes are systems procured and developed to solve a specific problem, characterized by a limited focus and functionality, and containing data that cannot be easily shared with other systems.

A stovepipe system is generally considered an example of an anti-pattern, particularly found in legacy systems. This is due to the lack of code reuse, and resulting software brittleness due to potentially general functions only being used on limited input.

However, in certain cases stovepipe systems are considered appropriate, due to benefits from vertical integration and avoiding dependency hell. For example, the Microsoft Excel team has avoided dependencies and even maintained its own C compiler, which helped it to ship on time, have high-quality code, and generate small, cross-platform code.

Inside Out: Publishing the internal model to the outside world

## Object Oriented Programming

### [Anemic domain model](https://en.wikipedia.org/wiki/Anemic_domain_model)
The use of the domain model without any business logic. The domain model's objects cannot guarantee their correctness at any moment, because their validation and mutation logic is placed somewhere outside (most likely in multiple places). Martin Fowler considers this to be an anti-pattern, but some disagree that it is always an anti-pattern.

### [Call super](https://en.wikipedia.org/wiki/Call_super)
Requiring subclasses to call a superclass's overridden method

### [Circle-ellipse problem](https://en.wikipedia.org/wiki/Circle-ellipse_problem)
Subtyping variable-types on the basis of value-subtypes

### [Circular dependency](https://en.wikipedia.org/wiki/Circular_dependency)
Introducing unnecessary direct or indirect mutual dependencies between objects or software modules

### [Constant interface](https://en.wikipedia.org/wiki/Constant_interface)
Using interfaces to define constants

### [God object](https://en.wikipedia.org/wiki/God_object)
Concentrating too many functions in a single part of the design (class)

### [Object cesspool](https://en.wikipedia.org/wiki/Object_cesspool)
Reusing objects whose state does not conform to the (possibly implicit) contract for re-use

### [Object orgy](https://en.wikipedia.org/wiki/Object_orgy)
Failing to properly encapsulate objects permitting unrestricted access to their internals

### [Poltergeists](https://en.wikipedia.org/wiki/Poltergeist_(computer_science))
Objects whose sole purpose is to pass information to another object

### [Sequential coupling](https://en.wikipedia.org/wiki/Sequential_coupling)
A class that requires its methods to be called in a particular order

### [Yo-yo problem](https://en.wikipedia.org/wiki/Yo-yo_problem)
A structure (e.g., of inheritance) that is hard to understand due to excessive fragmentation

## Programming

### [Accidental complexity](https://en.wikipedia.org/wiki/Accidental_complexity)
Programming tasks which could be eliminated with better tools (as opposed to essential complexity inherent in the problem being solved)

### [Action at a distance](https://en.wikipedia.org/wiki/Action_at_a_distance_(computer_science))
Unexpected interaction between widely separated parts of a system

### [Boat anchor](https://en.wikipedia.org/wiki/Boat_anchor_(computer_science))
Retaining a part of a system that no longer has any use

### [Busy waiting](https://en.wikipedia.org/wiki/Busy_waiting)
Consuming CPU while waiting for something to happen, usually by repeated checking instead of messaging

### [Caching failure](https://en.wikipedia.org/wiki/Caching_failure)
Forgetting to clear a cache that holds a negative result (error) after the error condition has been corrected

### [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming)
Using patterns and methods without understanding why

### [Coding by exception](https://en.wikipedia.org/wiki/Coding_by_exception)
Adding new code to handle each special case as it is recognized

### [Design pattern](https://en.wikipedia.org/wiki/Design_pattern)
The use of patterns has itself been called an anti-pattern, a sign that a system is not employing enough abstraction

### [Error hiding](https://en.wikipedia.org/wiki/Error_hiding)
Catching an error message before it can be shown to the user and either showing nothing or showing a meaningless message. This anti-pattern is also named Diaper Pattern. Also can refer to erasing the Stack trace during exception handling, which can hamper debugging.

### [Hard code](https://en.wikipedia.org/wiki/Hard_code)
Embedding assumptions about the environment of a system in its implementation

### [Lasagna code](https://en.wikipedia.org/wiki/Spaghetti_code#Lasagna_code)
Programs whose structure consists of too many layers of inheritance

### [Lava flow](https://en.wikipedia.org/wiki/Lava_flow_(programming))
Retaining undesirable (redundant or low-quality) code because removing it is too expensive or has unpredictable consequences

### [Loop-switch sequence](https://en.wikipedia.org/wiki/Loop-switch_sequence)
Encoding a set of sequential steps using a switch within a loop statement

### [Magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants)
Including unexplained numbers in algorithms

### [Magic strings](https://en.wikipedia.org/wiki/Magic_string_(programming)#Magic_strings_in_code)
Implementing presumably unlikely input scenarios, such as comparisons with very specific strings, to mask functionality.

### [Repeating yourself](https://en.wikipedia.org/wiki/Don%27t_Repeat_Yourself)
Writing code which contains repetitive patterns and substrings over again; avoid with once and only once (abstraction principle)

### [Shooting the messenger](https://en.wikipedia.org/wiki/Shooting_the_messenger)
Throwing exceptions from the scope of a plugin or subscriber in response to legitimate input, especially when this causes the outer scope to fail.

### [Shotgun surgery](https://en.wikipedia.org/wiki/Shotgun_surgery)
Developer adds features to an application codebase which span a multiplicity of implementors or implementations in a single change

### [Soft code](https://en.wikipedia.org/wiki/Softcoding)
Storing business logic in configuration files rather than source code

### [Spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code)
Programs whose structure is barely comprehensible, especially because of misuse of code structures

## Methodological

### [Copy and paste programming](https://en.wikipedia.org/wiki/Copy_and_paste_programming)
Copying (and modifying) existing code rather than creating generic solutions

### [Every Fool Their Own Tool](https://en.wikipedia.org/wiki/Every_Fool_His_Own_Tool)
Failing to use proper software development principles when creating tools to facilitate the software development process itself.

### [Golden hammer](https://en.wikipedia.org/wiki/Golden_hammer)
Assuming that a favorite solution is universally applicable (See: Silver bullet)

### [Improbability factor](https://en.wikipedia.org/wiki/Improbability_factor)
Assuming that it is improbable that a known error will occur

### [Invented here](https://en.wikipedia.org/wiki/Invented_here)
The tendency towards dismissing any innovation or less than trivial solution originating from inside the organization, usually because of lack of confidence in the staff

### [Not Invented Here (NIH) syndrome](https://en.wikipedia.org/wiki/Not_Invented_Here#In_computing)
The tendency towards reinventing the wheel (failing to adopt an existing, adequate solution)

### [Premature optimization](https://en.wikipedia.org/wiki/Program_optimization#When_to_optimize)
Coding early-on for perceived efficiency, sacrificing good design, maintainability, and sometimes even real-world efficiency

### [Programming by permutation](https://en.wikipedia.org/wiki/Programming_by_permutation)
Trying to approach a solution by successively modifying the code to see if it works

### [Reinventing the square wheel](https://en.wikipedia.org/wiki/Reinventing_the_wheel#Related_phrases)
Failing to adopt an existing solution and instead adopting a custom solution which performs much worse than the existing one

### [Silver bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet)
Assuming that a favorite technical solution can solve a larger process or problem

### [Tester Driven Development](https://en.wikipedia.org/wiki/Tester_Driven_Development)
Software projects in which new requirements are specified in bug reports

## Configuration Management

### [Dependency hell](https://en.wikipedia.org/wiki/Dependency_hell)
Problems with versions of required products

### [DLL hell](https://en.wikipedia.org/wiki/DLL_hell)
Inadequate management of dynamic-link libraries (DLLs), specifically on Microsoft Windows

### [Extension conflict](https://en.wikipedia.org/wiki/Extension_conflict)
Problems with different extensions to classic Mac OS attempting to patch the same parts of the operating system

### [JAR hell](https://en.wikipedia.org/wiki/JAR_hell)
Overutilization of multiple JAR files, usually causing versioning and location problems because of misunderstanding of the Java class loading model
