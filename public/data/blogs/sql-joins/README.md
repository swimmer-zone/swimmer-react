# SQL Joins

## Introduction

I always had trouble using `JOINS` in SQL, but the images below and the queries make things a lot more clear. There are five types of `JOINS`: `INNER`, `OUTER`, `LEFT`, `RIGHT` and `FULL`. Because `LEFT JOIN` and `RIGHT JOIN` are essentially the same, I won't use `RIGHT JOIN` in this article. To make code more readable, a `RIGHT JOIN` will be used in the real world, also in a query with multiple `JOINS` this can come in handy. Other types are `OUTER LEFT JOIN` or `OUTER RIGHT JOIN`, which are equivalent to resp. `LEFT JOIN` or `RIGHT JOIN`. And `INNER LEFT JOIN` or `INNER RIGHT JOIN` which both are equivalent to `INNER JOIN`.

## Cross Join

![Cross Join](/data/blogs/sql-joins/images/cross_join.png)

For starters a `CROSS JOIN`, you have to be careful with this `JOIN`, because it results in a [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) between the tables. Every record of table_a is linked to every record of table_b. If both tables have 2 records, it results in 4 records, but if table_a has 1.000 records and table_b 10.000 records, it results in 10.000.000 records of which, in most cases, a lot of records are filtered afterwards. The diagram is empty, because essentially there is no relation between the tables.

```sql
SELECT      *
FROM        table_a AS a
CROSS JOIN  table_b AS b
```

## Left and Right Join

![Left Join](/data/blogs/sql-joins/images/left_join.png)
![Right Join](/data/blogs/sql-joins/images/right_join.png)

A piece of example code, in which table_a points to a in the image and table_b points to b. This can be used to show replies to a news post. In the example queries I use the `ON` clause. `USING` can be used too. `ON a.id = b.id` becomes `USING (id)`. One condition is that the columns share the same name, in the result set only one id column appears, where there's two in the `ON`. Mostly id of one table matches sub_id in the other, so the use of `USING` is a lot harder.

```sql
SELECT      *
FROM        table_a AS a
LEFT JOIN   table_b AS b
    ON      a.id = b.id;
```

```sql
SELECT      *
FROM        table_a AS a
RIGHT JOIN  table_b AS b
    ON      a.id = b.id;
```

In most cases the name of the author of a news post is acquired from the user table, which leads to 3 `JOINS` in this code.

```sql
SELECT      news.title,
            news.content,
            comments.title,
            comments.content,
            comments.news_id,
            users.name
FROM        comments
LEFT JOIN   news
    ON      comments.news_id = news.id
LEFT JOIN   users
    ON      news.user_id = user.id
LEFT JOIN   comments.user_id = user.id;
```

## Left and Right Join

With the exception of overlapping records

![Left join B-Key Is NULL](/data/blogs/sql-joins/images/left_outer_join.png)
![Right join A-Key Is NULL](/data/blogs/sql-joins/images/right_outer_join.png)

This query can be used when you want to match all news posts which don't have any replies, or when the author is anonymous.

```sql
SELECT          *
FROM            table_a AS a
LEFT JOIN       table_b AS b
    ON          a.id = b.id
WHERE           b.id = NULL;
```

```sql
SELECT          *
FROM            table_a AS a
RIGHT JOIN      table_b AS b
    ON          a.id = b.id
WHERE           a.id = NULL;
```

## Inner Join

![Inner Join](/data/blogs/sql-joins/images/inner_join.png)

This query can be used when you want to match all users who are logged in at least once, if logins are logged in a log table.

```sql
SELECT          *
FROM            table_a AS a
INNER JOIN      table_b AS b
    ON          a.id = b.id;
```

## Outer Join

![Outer Join](/data/blogs/sql-joins/images/outer_join.png)

```sql
SELECT          *
FROM            table_a AS a
FULL OUTER JOIN table_b AS b
    ON          a.id = b.id;
```

## Outer Join

With the exception of overlapping records

![Outer join Key Is NULL](/data/blogs/sql-joins/images/full_outer_join.png)

```sql
SELECT          *
FROM            table_a AS a
FULL OUTER JOIN table_b AS b
    ON          a.id = b.id
WHERE           a.id = NULL
    OR          b.id = NULL;
```

## Subqueries

Another way to join tables are subqueries, `JOIN` isn't used explicitly. Almost all databases support this, also MySQL version 4.1 and above. In this article I won't describe these subqueries, apart from a small example, which gains the same results as a `LEFT JOIN`.

```sql
SELECT          *
FROM            table_a AS a
WHERE           id = (

                    SELECT          id
                    FROM            table_b AS b
                );
```

In certain databases, like PostgreSQL, you can't do a lot without subqueries. Date or time fields are like data-objects, just like a table. In the query below all news posts of the current year are displayed:

```sql
SELECT          *
FROM            news
WHERE           extract(year FROM date_time) = date('Y');
```
