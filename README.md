<!-- README.md is generated from README.Rmd. Please edit that file -->
gaugeR
======

A function to create interactive gauge charts as well as output and render functions for using gauge within Shiny applications and interactive Rmd documents.

Installation
------------

    #> Loading required package: htmlwidgets

You can install gaugeR from github with:

``` r
# install.packages("devtools")
devtools::install_github("jumpingrivers/gaugeR")
```

Example
-------

This are some basic examples of the command `gauge()`:

``` r
gauge(0)
```

<!--html_preserve-->

<script type="application/json" data-for="htmlwidget-94866ee26c2b8569ba9a">{"x":{"data":0},"evals":[],"jsHooks":[]}</script>
<!--/html_preserve-->
``` r
gauge(50)
```

<!--html_preserve-->

<script type="application/json" data-for="htmlwidget-0b6b489d1ca05be95eba">{"x":{"data":50},"evals":[],"jsHooks":[]}</script>
<!--/html_preserve-->
``` r
gauge(c(3,3))
```

<!--html_preserve-->

<script type="application/json" data-for="htmlwidget-63fa6e826df6c5375e0f">{"x":{"data":[3,3]},"evals":[],"jsHooks":[]}</script>
<!--/html_preserve-->
Shiny Example
-------------

Here is a very basic shiny app example

``` r
## Only run this in interactive sessions
if(interactive()){
  ui <- fluidPage(
    titlePanel("Gauge Example!"),
    sidebarLayout(
      sidebarPanel(
        sliderInput("obs",
                    "Pick a percentage",
                    min = 1,
                    max = 100,
                    value = 5)
      ),
      mainPanel(
        gaugeOutput("gaugePlot")
      )
    )
  )


  # Define the server code
  server <- function(input, output) {

    output$gaugePlot <- renderGauge({
      gauge(input$obs)
    })

  }

  shinyApp(ui = ui, server = server)
}
```
