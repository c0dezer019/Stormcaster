# VERSION 2.0

Version 2 of Stormcaster will bring an overhaul of my original design, implementing tools like
webpack, babel, typescript, and Redux. I will also be revisiting its styling while retaining the
original layout. I have also extended the original scope of this project.

- Own app structure instead of using CRA (create-react-app).
    - CRA bloats a React app with tools you may or may not use.
    - CRA uses tools that are out-of-date, and forces the use of the provided version if you want to
      implicitly use those tools.
        - Trying to use a different version of these tools causes a dependency error.
- Styling will be with styled-components.
    - Current styling mixes between Material-UI and Bootstrap. While this isn't entirely a
      problem as both have almost similar styles, I'd like to use something that is less generic in
      approach, and increase my knowledge of CSS.
    - Styled-components will avoid the common issues that CSS brings and make style management and
      maintenance faster.
- Swapping Context with Redux.
    - Some data changes are frequent, like the weather. React Context does not performant for
      handling these kinds of operations, something Redux is born for.
- Directly working with webpack for bundling and optimization solutions.
- Directly working with Babel to ensure all app features are transpiled to ES5 standards for maximum
compatibility.

### MVP
The MVP for this refactor has the following goals:
- The app successfully runs and builds with webpack.
- Babel successfully transpiles the code to ES5 standards.
- 
