### Angular notes

**Start New Project**<br/>
`
ng new ng5 --style=scss --routing
`

**Serve Pages on port 4200**<br/>
```
ng serve
```

**Build**<br/>
This is the command you will run to build the app for static server<br/>
`
ng build
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
  { path: 'about/:id', component : AboutComponent }, //Pass Parameter
  { path: '**', component : PageNotFoundComponent },

];
```

**ngOnInit**
Invoked first time when initialized


