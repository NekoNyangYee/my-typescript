type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

type ReadOnlyTodo = Readonly<Pick<Todo, 'title'>> & Omit<Todo, 'title'>;
