import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
export const App = () => {
  return (
    <div>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </div>  
  );
};
