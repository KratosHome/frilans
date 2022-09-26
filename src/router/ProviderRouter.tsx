import {Editor, Projects} from "../pages";


export const ProviderRouter: any[] = [
    {path: "/project/:id", component: <Editor/>},
    {path: "/projects", component: <Projects/>},
    {path: "/*", component: <Projects/>},
];