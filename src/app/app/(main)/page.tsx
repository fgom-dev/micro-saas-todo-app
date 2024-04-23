import { DashboardPage, DashboardPageHeader, DashboardPageHeaderNav, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/dashboard-page";
import { TodoDataTable } from "./_components/todo-data-table";
import { TodoUpsertSheet } from "./_components/todo-upsert-sheet";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { getUserTodos } from "./actions";

export default async function Page() {
  const todos = await getUserTodos()
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>
          Tarefas
        </DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <TodoUpsertSheet>
            <Button variant="outline" size="sm">
              <PlusCircledIcon className="w-4 h-4 mr-3" />
              Add todo
            </Button>
          </TodoUpsertSheet>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable data={todos} />
      </DashboardPageMain>
    </DashboardPage>
  )
}