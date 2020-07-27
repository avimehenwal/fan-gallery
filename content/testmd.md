# :star2: Test Markdown

<nuxt-link to="/test">
  Test Vue <Page></Page>
</nuxt-link>


## Definition List

something to explore?
:   Yeah, there is something to be answered


## :100: Latex

$\sqrt{3x-1}+(1+x)^2$

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

## Component

<Box>
  <template v-slot:header>
    W3<br>CSS
  </template>
  <template v-slot:body>
    <h2>Modern Responsive CSS</h2>
    <p>Equality for all browsers: Chrome. Firefox Edge. IE. Safari. Opera.</p>
    <p>Equality for all devices: Desktop. Laptop. Tablet. Mobile.</p>
    <p>Standard CSS only (No jQuery or JavaScript library).</p>
  </template>
</Box>

## Blockquote

> this is markdown yay!

## COntainers

::: tip title
content

muliti line
:::

```dot
digraph graphname {
  a -> b;
  b -> c;
  a -> c;
}
```

```py
def abc(self):
    pass
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

## Ratings

<Rating :values="['10', '10', '20', '30', '100']" />
