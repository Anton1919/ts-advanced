/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in

  ### Question

  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/4
*/

/* _____________ Your Code Here _____________ */

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type MyPick<T, K extends keyof T> = {
    [key in K]: T[key];
};

type test = MyPick<Todo, 'title'>;

const a: test = {
    title: '123',
};
