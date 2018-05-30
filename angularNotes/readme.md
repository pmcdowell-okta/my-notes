### Angular notes

**Start New Project**<br/>
`
ng new ng5 --style=scss --routing
`

**Serve Pages on port 4200**<br/>
`
ng serve
`

**Make components**

```
ng g c home
ng g c about
ng g c page-not-found -it -is     
(Inline template and inline styles) 
```

**Routing:**

Edit: ``
app.routing.module.ts
``
**example:**

```
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component : HomeComponent },
  { path: 'about', component : AboutComponent },
  { path: '**', component : PageNotFoundComponent },

];
```