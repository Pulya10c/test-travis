import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './components/summory-workspace/workspace/workspace.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AddCourseComponent } from './components/summory-workspace/courses/add-course/add-course.component';
import { CoursesListComponent } from './components/summory-workspace/courses/courses-list/courses-list.component';
import { EditCourseComponent } from './components/summory-workspace/courses/edit-course/edit-course.component';

const routes: Routes = [
	{ path: '', redirectTo: 'courses', pathMatch: 'full' },
	{
		path: 'courses',
		component: WorkspaceComponent,
		children: [
			{ path: '', component: CoursesListComponent },
			{ path: 'new-course', component: AddCourseComponent },
			{ path: 'edit', component: EditCourseComponent },
		],
	},
	{ path: 'authorization', component: AuthorizationComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
