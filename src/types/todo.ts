interface Assignee {
  memberId: number;
  name: string;
  profileImage: string;
}

export interface TodoType {
  todoId: number;
  todoName: string;
  startDate: string;
  endDate: string;
  status: number;
  isMyTodo: boolean;
  assignee: Assignee[];
}
