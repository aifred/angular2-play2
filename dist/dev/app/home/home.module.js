"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var home_component_1 = require('./home.component');
var home_routing_module_1 = require('./home-routing.module');
var shared_module_1 = require('../shared/shared.module');
var name_list_service_1 = require('../shared/name-list/name-list.service');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [home_routing_module_1.HomeRoutingModule, shared_module_1.SharedModule],
            declarations: [home_component_1.HomeComponent],
            exports: [home_component_1.HomeComponent],
            providers: [name_list_service_1.NameListService]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFDMUQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsa0NBQWdDLHVDQUF1QyxDQUFDLENBQUE7QUFReEU7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsdUNBQWlCLEVBQUUsNEJBQVksQ0FBQztZQUMxQyxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDeEIsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztTQUM3QixDQUFDOztrQkFBQTtJQUN3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIb21lUm91dGluZ01vZHVsZSwgU2hhcmVkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtIb21lQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl19
