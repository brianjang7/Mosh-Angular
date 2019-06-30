import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:10 }}
    `
})
export class CoursesComponent {
    test = `
    Lorem Ipsum is simply dummy test of the printing
    `
}  