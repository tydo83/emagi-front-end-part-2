# Emagi Front-End - Part 2

Welcome back! A the end of Part 1, we got `encodeWord` to work on a basic level and used it to map over the user's words, returning an array we could `.join` into a sentence back to them.

But our `encodeWord` isn't quite done yet. It still can't handle uppercased letters or non-letters like spaces or numbers. And, even more importantly, we are currently running only our encoding feature OR our translation feature.

So let's fix those!

### Picking Features

First thing's first. Let's lay down a framework for choosing between these two features, and then from there we can add more features easily.


