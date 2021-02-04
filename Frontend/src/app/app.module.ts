import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerModule, BsDropdownModule, ButtonsModule, PaginationModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import {TimeAgoPipe} from 'time-ago-pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { MemberCardComponent } from './members/member-list/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-list/member-detail/member-detail.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { NgxGalleryModule } from 'ngx-gallery';
import { MemberEditComponent } from './members/member-list/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/member-list/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';

import {Pipe, PipeTransform} from '@angular/core';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { MemberMessagesComponent } from './members/member-list/member-messages/member-messages.component';


export class CustomHammerConfig extends HammerGestureConfig {
   overrides = {
      pinch: { enable: false },
      rotate: { enable: false }
   };
}



@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoExtendsPipePipe extends TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    return super.transform(value);
  }
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      TimeAgoPipe,
      MemberMessagesComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      PaginationModule.forRoot(),
      HttpClientModule,
      FormsModule,
      ButtonsModule.forRoot(),
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule,
      TabsModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      MemberDetailResolver,
      MemberListResolver,
      { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
      MemberEditResolver,
      PreventUnsavedChanges,
      ListsResolver,
      MessagesResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
