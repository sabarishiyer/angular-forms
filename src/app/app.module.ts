import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
	FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
