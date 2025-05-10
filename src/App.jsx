import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} 
  from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
  // Function to add a new job
  const addJob = async (newJob) => {
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    if (!response.ok) {
      throw new Error("Failed to add job");
    }
    return;
};

// Delete job function
const deleteJob = async (id) => {
  const response = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete job");
  }
  return;
};

// Function to update a job
const updateJob = async (updatedJob) => {
  const response = await fetch(`/api/jobs/${updatedJob.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedJob),
  });
  if (!response.ok) {
    throw new Error("Failed to update job");
  }
  return;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={ deleteJob} />} loader={jobLoader} />
      <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}/>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
  return <RouterProvider router={router}/>
}
export default App;