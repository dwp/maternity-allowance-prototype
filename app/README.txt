New Iteration Checklist:

- Duplicate "/views/beta-private/iteration-x/" (latest) folder.
- Duplicate "/routes/beta-private/iteration-X.js" (latest) to create a new routes for the new iteration
- Replace all references to 'iteration-x' to the newest version within new routes file
- Add a reference to this new file in "/views/routes.js"
- Add a link to the new iteration in:
  * "/views/index.html"
  * "/beta-private/index.html"
  * "/beta-private/iteration-[new]/index.html" // not necessary since iteration 13
- Amend links to reflect the new iteration in "/beta-private/iteration-[new]/landing.html" ("Start a claim" / "Find a claim" page)
- Change scenario descriptions on "/beta-private/iteration-[new]/index.html"
- Add design decisions and hypotheses to previous iteration
