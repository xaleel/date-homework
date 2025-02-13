# Practice for working with the Date object

### 1. Files

-   `DateUtils.js` - the file you'll be editing. It has a single class with methods you need to complete
-   `test.js` - has functions to test your implemntation of `DateUtils`. You shouldn't edit anything in it

### 2. Testing your implementation

After implementing a method, run `node test.js` to see result of all tests. If you want to test a single method, you can pass the `--method` argument, e.g. `node test.js --method diff`

### 3. Class methods to complete:

-   `dateSorter`

    -   Takes direction and returns a function that can be used as an argument for `Array.sort`
    -   signature: `(direction: "asc" | "desc") => ((date1: Date, date2: Date) => number)`
    -   usage:

    ```
    [...dates].sort(DateUtils.dateSorter("asc"))
    ```

    -   note: invalid direction arg should behave as "asc"

-   `add`

    -   Takes a date, value, and unit to be added to the date.
    -   signature: `(date: Date, value: number, unit: "day" | "month" | "year") => Date`
    -   usage:

    ```
    const tomorrow = DateUtils.add(new Date(), 1, "day");
    ```

    -   note: invalid unit should return the same date

-   `diff`
    -   Takes two dates and returns the calculated difference between them, formatted in a string from highest unit to lowest
    -   Return format example: `"1 day(s), 2 hour(s)"` and NOT `"26 hour(s)"`
    -   signature: `(date1: Date, date2: Date) => string`
    -   usage:
    ```
    DateUtils.diff(new Date(2025, 1, 1), new Date(2026, 2, 2));
    // -> "1 year(s), 1 month(s), 1 day(s)"
    ```
    -   note: assume max days is always 30. E.g. `1 month(s), 1 days(s)` and not `31 day(s)`

#### Note: all methods must be pure; Date objects passed as arguments must not be mutated

## Good luck!
