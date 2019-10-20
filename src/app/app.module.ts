import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { BreadcrumbsComponent } from './components/summory-workspace/breadcrumbs/breadcrumbs.component';
import { ControlPanelComponent } from './components/summory-workspace/control-panel/control-panel.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { HeaderComponent } from './components/header/header.component';
import { AddCourseComponent } from './components/summory-workspace/courses/add-course/add-course.component';
import { courses } from './components/summory-workspace/courses/courses.index';
import { FooterComponent } from './components/footer/footer.component';
import { summory } from './components/summory-workspace/summory-workspace.index';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCourseComponent } from './components/summory-workspace/courses/edit-course/edit-course.component';

@NgModule({
	declarations: [
		AppComponent,
		BreadcrumbsComponent,
		ControlPanelComponent,
		AuthorizationComponent,
		HeaderComponent,
		...courses,
		FooterComponent,
		AddCourseComponent,
		AuthorizationComponent,
		...summory,
		EditCourseComponent,
	],
	imports: [BrowserModule, FormsModule, AppRoutingModule, NoopAnimationsModule, SharedModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
