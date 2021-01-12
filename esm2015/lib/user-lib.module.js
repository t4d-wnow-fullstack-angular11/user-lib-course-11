import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { currentUserReducer } from './reducers/current-user.reducer';
import { CurrentUserEffects } from './effects/current-users.effects';
export const StoreFeatureModule = StoreModule.forFeature('user', { currentUser: currentUserReducer });
export const EffectsFeatureModule = EffectsModule.forFeature([CurrentUserEffects]);
export class UserLibModule {
}
UserLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ChangePasswordFormComponent,
                    CurrentUserComponent,
                    LoginFormComponent,
                    UserProfileComponent,
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    MatListModule,
                    MatToolbarModule,
                    MatSidenavModule,
                    MatButtonModule,
                    MatIconModule,
                    MatCardModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatMenuModule,
                    MatTableModule,
                    MatSnackBarModule,
                    StoreFeatureModule,
                    EffectsFeatureModule,
                ],
                exports: [
                    ChangePasswordFormComponent,
                    CurrentUserComponent,
                    LoginFormComponent,
                    UserProfileComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL3VzZXItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91c2VyLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7QUFDdEcsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQWtDbkYsTUFBTSxPQUFPLGFBQWE7OztZQWhDekIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixvQkFBb0I7aUJBQ3JCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XG5pbXBvcnQgeyBNYXRTaWRlbmF2TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC1mb3JtL2NoYW5nZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXJyZW50VXNlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jdXJyZW50LXVzZXIvY3VycmVudC11c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjdXJyZW50VXNlclJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2N1cnJlbnQtdXNlci5yZWR1Y2VyJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jdXJyZW50LXVzZXJzLmVmZmVjdHMnO1xuXG5leHBvcnQgY29uc3QgU3RvcmVGZWF0dXJlTW9kdWxlID0gU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgndXNlcicsIHsgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyUmVkdWNlciB9KTtcbmV4cG9ydCBjb25zdCBFZmZlY3RzRmVhdHVyZU1vZHVsZSA9IEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbQ3VycmVudFVzZXJFZmZlY3RzXSk7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYW5nZVBhc3N3b3JkRm9ybUNvbXBvbmVudCxcbiAgICBDdXJyZW50VXNlckNvbXBvbmVudCxcbiAgICBMb2dpbkZvcm1Db21wb25lbnQsXG4gICAgVXNlclByb2ZpbGVDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgU3RvcmVGZWF0dXJlTW9kdWxlLFxuICAgIEVmZmVjdHNGZWF0dXJlTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2hhbmdlUGFzc3dvcmRGb3JtQ29tcG9uZW50LFxuICAgIEN1cnJlbnRVc2VyQ29tcG9uZW50LFxuICAgIExvZ2luRm9ybUNvbXBvbmVudCxcbiAgICBVc2VyUHJvZmlsZUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckxpYk1vZHVsZSB7IH1cbiJdfQ==