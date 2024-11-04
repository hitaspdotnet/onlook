import { AuthManager } from '@onlook/services/auth';
import { EditorEngine } from '@onlook/editor/engine';
import { ProjectsManager } from '@onlook/services/projects';
import { RouteManager } from '@onlook/services/routes';
import { UpdateManager } from '@onlook/services/update';
import { createContext, useContext } from 'react';

const authManager = new AuthManager();
const routeManager = new RouteManager();
const projectsManager = new ProjectsManager();
const editorEngine = new EditorEngine(projectsManager);
const updateManager = new UpdateManager();

const AuthContext = createContext(authManager);
const RouteContext = createContext(routeManager);
const ProjectsContext = createContext(projectsManager);
const EditorEngineContext = createContext(editorEngine);
const UpdateContext = createContext(updateManager);

export const useAuthManager = () => useContext(AuthContext);
export const useRouteManager = () => useContext(RouteContext);
export const useProjectsManager = () => useContext(ProjectsContext);
export const useEditorEngine = () => useContext(EditorEngineContext);
export const useUpdateManager = () => useContext(UpdateContext);
