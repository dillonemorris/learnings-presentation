import React from "react";
import {
  Deck,
  Slide,
  Heading,
  Text,
  List,
  ListItem,
  BlockQuote,
  Quote,
  Cite,
  CodePane,
  Image,
  Appear
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import FlexGrid from "../components/FlexGrid";
import Grid from "../components/Grid";

require("../assets/code-theme.css");

const theme = createTheme(
  {
    white: "#fff",
    body: "#1A202C",
    primary: "#D53F8C",
    secondary: "#1F2022",
    tertiary: "#CBD5E0"
  },

  {
    primary: "League Spartan"
  }
);

const images = {
  goodWork: require("../assets/good-work.gif"),
  blogGrid: require("../assets/blog-grid.png"),
  blogGridGrid: require("../assets/blog-grid-w-grid.png"),
  featureGrid: require("../assets/feature-grid.png"),
  featureGridGrid: require("../assets/feature-grid-w-grid.png"),
  okay: require("../assets/okay.gif"),
  synapse: require("../assets/synapse-site.png"),
  synapseButtons: require("../assets/synapse-site-buttons.png"),
  synapseHero: require("../assets/synapse-site-hero.png"),
  contentful: require("../assets/contentful.png"),
  contentfulHome: require("../assets/contentful-home.png"),
  gatsby: require("../assets/gatsby.jpg"),
  siteExamples: require("../assets/site-examples.png"),
  nice: require("../assets/nice.gif"),
  styledComponents: require("../assets/styled-components.png")
};

const code = {
  deckSample: require("!!raw-loader!../assets/code.example"),
  flexGridSample: require("!!raw-loader!../assets/flexbox-grid.example"),
  gridSample: require("!!raw-loader!../assets/grid.example"),
  gridLineSample: require("!!raw-loader!../assets/grid-line.example"),
  gridColumnsLine: require("!!raw-loader!../assets/gridColumnsLine.example"),
  gridRepeatLine: require("!!raw-loader!../assets/gridRepeatLine.example"),
  gridRepeatFunction: require("!!raw-loader!../assets/gridRepeatFunction.example"),
  gridMinMax: require("!!raw-loader!../assets/gridMinMax.example"),
  graphQL: require("!!raw-loader!../assets/graphQL.example"),
  queryHook: require("!!raw-loader!../assets/queryHook.example"),
  colorHookUsage: require("!!raw-loader!../assets/colorHookUsage.example"),
  colorHookDestructured: require("!!raw-loader!../assets/colorHookDestructured.example"),
  buttonComponent: require("!!raw-loader!../assets/button-component.example"),
  useDarkMode: require("!!raw-loader!../assets/useDarkMode.example"),
  themeProvider: require("!!raw-loader!../assets/themeProvider.example"),
  useDarkModeState: require("!!raw-loader!../assets/useDarkModeState.example"),
  themes: require("!!raw-loader!../assets/themes.example"),
  headerStyled: require("!!raw-loader!../assets/headerStyled.example"),
  headerStyledDestructured: require("!!raw-loader!../assets/headerStyledDestructured.example"),
  ThemeContext: require("!!raw-loader!../assets/ThemeContext.example")
};

const Presentation = () => {
  return (
    <Deck
      theme={theme}
      transition={["zoom", "slide", "fade"]}
      transitionDuration={500}
    >
      <Slide bgColor="white">
        <Heading textColor="primary">Learnings 🤓</Heading>
        <Text margin="10px auto" bold width={200}>
          Solutions I've found to common and not so common problems working on
          the web and in mobile.
        </Text>
      </Slide>
      <Slide>
        <Image src={images.goodWork} width={800} />
      </Slide>
      <Slide bgColor="white" textColor="primary">
        <Heading lineHeight={1.4} textColor={"primary"}>
          Responsive Grids
        </Heading>
      </Slide>
      <Slide bgColor="white">
        <Image src={images.featureGrid} width={1200} />
      </Slide>
      <Slide transition={["none"]} bgColor="white">
        <Image src={images.featureGridGrid} width={1200} />
      </Slide>
      <Slide bgColor="white">
        <Image src={images.blogGrid} width={1200} />
      </Slide>
      <Slide transition={["none"]} bgColor="white">
        <Image src={images.blogGridGrid} width={1200} />
      </Slide>
      <Slide>
        <Text textColor="tertiary" margin="0px auto 16px">
          Responsive Grid
        </Text>
        <Heading textColor="white">Challenges</Heading>
        <List>
          <ListItem margin="40px auto">
            Screens can be many different sizes. We want grids that are fluid in
            respect to their device's size.
          </ListItem>
          <ListItem margin="40px auto">
            Media queries (the most common approach to responsive grids) can be
            hard to reason about and just unpleasant to work with.
          </ListItem>
        </List>
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          margin="0 auto"
          lang="javascript"
          overflow="overflow"
          source={code.flexGridSample}
        />
      </Slide>
      <Slide bgColor="#1A202C">
        <FlexGrid />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          margin="0 auto"
          lang="javascript"
          overflow="overflow"
          source={code.gridSample}
        />
      </Slide>
      <Slide bgColor="#1A202C">
        <Grid />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          margin="0 auto"
          lang="javascript"
          overflow="overflow"
          source={code.gridLineSample}
        />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.gridColumnsLine}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          margin="0 auto"
          lang="javascript"
          overflow="overflow"
          source={code.gridRepeatLine}
        />
        <Appear>
          <CodePane
            margin="10px auto"
            lang="javascript"
            overflow="overflow"
            source={code.gridRepeatFunction}
          />
        </Appear>
        <Appear>
          <CodePane
            margin="10px auto"
            lang="javascript"
            overflow="overflow"
            source={code.gridMinMax}
          />
        </Appear>
        <Appear>
          <CodePane
            margin="10px auto"
            lang="javascript"
            overflow="overflow"
            source={code.gridColumnsLine}
          />
        </Appear>
      </Slide>
      <Slide>
        <Image src={images.okay} width={300} />
      </Slide>
      <Slide>
        <Text textColor="tertiary" margin="0px auto 16px">
          Responsive Grid
        </Text>
        <Heading textColor="white">Caveats</Heading>
        <List>
          <ListItem margin="40px auto">
            CSS Grid isn’t fully supported in IE11.
          </ListItem>
          <ListItem margin="40px auto">
            Other than in Internet Explorer, CSS Grid Layout is unprefixed in
            Safari, Chrome, Opera, Firefox and Edge.
          </ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading>
          <BlockQuote>
            <Quote style={{ fontSize: 48, lineHeight: 1.3 }} textColor="white">
              Even if you decide you can't use it today, I'd recommend still
              learning it as these older browsers will go away just as quick as
              grid showed up!
            </Quote>
            <Cite>Wes Bos</Cite>
          </BlockQuote>
        </Heading>
      </Slide>
      <Slide bgColor="white" textColor="primary">
        <Heading lineHeight={1.4} textColor={"primary"}>
          Theming with Contentful
        </Heading>
      </Slide>
      <Slide bgColor="#1A202C">
        <Image src={images.synapse} width={1200} />
      </Slide>
      <Slide bgColor="#fff">
        <Image src={images.gatsby} width={1200} />
      </Slide>
      <Slide bgColor="#fff">
        <Image src={images.contentful} width={1200} />
      </Slide>
      <Slide bgColor="#1A202C">
        <Image src={images.synapseHero} width={600} />
      </Slide>
      <Slide bgColor="#1A202C">
        <Image src={images.contentfulHome} width={1200} />
      </Slide>
      <Slide>
        <CodePane
          lang="jsx"
          source={code.graphQL}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
      <Slide>
        <Text textColor="tertiary" margin="0px auto 16px">
          Theming with Contentful
        </Text>
        <Heading textColor="white">Challenges</Heading>
        <List>
          <ListItem margin="40px auto">
            graphQL queries are tied to the component in which their data are
            used
          </ListItem>
        </List>
      </Slide>

      <Slide bgColor="#1A202C">
        <Image src={images.synapseButtons} width={1200} />
      </Slide>
      <Slide bgColor="#1A202C">
        <Image src={images.siteExamples} width={1200} />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.queryHook}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.colorHookUsage}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.colorHookDestructured}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.buttonComponent}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
      <Slide>
        <Image src={images.nice} width={800} />
      </Slide>
      <Slide>
        <Heading lineHeight={1.4} textColor={"white"}>
          Implementing Dark Theme
        </Heading>
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.useDarkMode}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.useDarkModeState}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
      <Slide>
        <Image src={images.styledComponents} width={400} />
      </Slide>
      <Slide bgColor="#fff">
        <Text textColor="primary" margin="0px auto 16px">
          Theming with styled-components
        </Text>
        <Text>
          styled-components has full theming support by exporting a
          ThemeProvider wrapper component. This component provides a theme to
          all React components underneath itself via the context API. In the
          render tree all styled-components will have access to the provided
          theme, even when they are multiple levels deep.
        </Text>
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.themes}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.headerStyled}
          margin="20px auto"
          overflow="overflow"
        />
        <Appear>
          <CodePane
            lang="jsx"
            source={code.headerStyledDestructured}
            margin="20px auto"
            overflow="overflow"
          />
        </Appear>
      </Slide>
      <Slide bgColor="#1A202C">
        <CodePane
          lang="jsx"
          source={code.ThemeContext}
          margin="20px auto"
          overflow="overflow"
        />
      </Slide>
    </Deck>
  );
};

export default Presentation;
