# Death to mailto

## What is mailto?

See [Wikipedia](https://en.wikipedia.org/wiki/Mailto)
> mailto is a Uniform Resource Identifier (URI) scheme for email addresses. It is used to produce hyperlinks on websites that allow users to send an email to a specific address without first having to copy it and enter it into an email client.

## What is the problem?

*mailto* links are a relic of the old internet, they are used to provide an easy way for a user to contact some email on a site. Most often, this creates an unintended user experience where one may unintentionally click on a regular link and it opens up the default mail application.

Often this happens:

![What happens when you click on a mailto url](https://github.com/jeetdas/Death-to-mailto/blob/master/Screenshot.png?raw=true)

My reaction is way too often:

![Funny reaction](https://github.com/jeetdas/Death-to-mailto/blob/master/reaction.gif?raw=true)

## So what does this project do?

Looks for all *mailto* links in a page, substitutes the *href* part to execute some Javascript that just copies the email and shows a little pop up about it.

- [x] Doesn't break the user flow/experience
- [x] Shows what happened upon clicking the url

## What it looks like?

![With project installed](https://github.com/jeetdas/Death-to-mailto/blob/master/Screenshot-with-package.png?raw=true)
