import "./App.css";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  shorthands,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
const resolveAsset = (asset) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

  return `${ASSET_URL}${asset}`;
};
const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "500px",
    maxWidth: "100%",
  },
});
function App() {
  const styles = useStyles();
  return (
    <Card className={styles.card} size='small' appearance="filled">
      <CardHeader
        
         image={
          <img
            src={resolveAsset("avatar_elvia.svg")}
            alt="Elvia Atkins avatar picture"
          />
         } 
       
        header={
          <Body1>
            <b>Elvia Atkins</b> mentioned you
          </Body1>
        }
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />

      <CardPreview
        logo={
          <img
          src={resolveAsset("word_logo.svg")}
            alt="Microsoft Word document"
          />
        }
      >
        <img
        src={resolveAsset("doc_template.png")}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
      </CardFooter>
    </Card>
  );
}

export default App;
