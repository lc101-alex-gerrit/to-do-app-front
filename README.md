# REST API Demo

## Part 1

- Create new Angular project `ng new to-do-app-front`
- git config setup and inital commit
- initial setup
  - replace started html
    ```html
    <header>
      <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">ToDo List App</a>
          <div class="navbar-nav ms-auto">
            <a class="nav-link" routerLink="task/add">Add Task</a>
          </div>
        </div>
      </nav>
      <div style="margin-top: 3.5rem;"></div>
    </header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
    ```
  - add bootstrap
    ```html
    <link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous">
    ```
    ```html
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
    ```

#### Core Module

- create `core` module
  ```
  ng g m core
  ```
  import `HttpClientModule` into `CoreModule` and `CoreModule` into `AppModule`
- create `data` service in the `core` module
  ```
  ng g s core/data --skip-tests
  ```

#### Task Module

- create `task` module (with routing)
  ```
  ng g m task --routing
  ```
  import `TaskModule` into `AppModule`
- create `task` interface
  ```
  ng g i task/task interface
  ```
- create `task-details` component
  ```
  ng g c task/task-details --skip-tests
  ```
  setup route for `task/:id`

- create `task-form` component
  ```
  ng g c task/task-form --skip-tests
  ```
  import `ReactiveFormsModule` into `TaskModule`
- create `task-add` component
  ```
  ng g c task/task-add --skip-tests
  ```
  setup route for `task/add`

## Part 2

#### Task List Module

- create `task-list` module (with routing)
  ```
  ng g m task-list --routing
  ```
  import `TaskListModule` into `AppModule`
- create `task-list` component
  ```
  ng g c task-list --skip-tests
  ```
  setup route for `tasks`
- create `list-item` subcomponent
  ```
  ng g c task-list/list-item --skip-tests
  ```
- set default routes to `tasks`

## Part 3

- add edit/update feature
- add delete feature

# ToDoAppFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
