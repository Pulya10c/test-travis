import { WorkspaceComponent } from './workspace/workspace.component';
import { courses } from './courses/courses.index';
import { ControlPanelComponent } from './control-panel/control-panel.component';

export const summory = [WorkspaceComponent, ...courses, ControlPanelComponent];
