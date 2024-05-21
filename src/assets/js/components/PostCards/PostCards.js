import {
  Card as WPCard,
  CardBody,
  CardDivider,
  CardHeader,
  Button,
  ExternalLink,
  Icon,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useMemo } from "@wordpress/element";
import { VList } from "virtua";

import { Tag } from "../Tag/Tag.js";

export const Card = ({ post, blockName }) => {
  const tags = useMemo(() => getTags(post, blockName), [post, blockName]);

  return (
    <WPCard size="small" className="fmb-card">
      <CardHeader isBorderless>
        <div>
          <span className="fmb-card-title">{post.title}</span>
          <span className="fmb-card-meta">
            <code>{post?.postType}</code>{" "}
            {post?.isThirdPartyTemplate && (
              <code>{post?.templateProvider}</code>
            )}{" "}
          </span>
        </div>
        <div>
          <Button
            target="_blank"
            isTertiary
            href={post.post_url}
            size={"small"}
          >
            {__("Preview", "find-my-blocks")}
          </Button>
          <Button
            target="_blank"
            isTertiary
            href={post.edit_url}
            size={"small"}
          >
            {__("Edit", "find-my-blocks")}
          </Button>
        </div>
      </CardHeader>
      {tags.length > 0 && (
        <>
          <CardDivider />
          <CardBody>
            {tags.map((tag) => (
              <Tag key={tag.label} {...tag} />
            ))}
          </CardBody>
        </>
      )}
    </WPCard>
  );

  function getTags(post) {
    const tags = [];

    if (post.hasConditionalBlocks) {
      tags.push({
        label: __("Conditional", "find-my-blocks"),
        help: (
          <span>
            {__("via", "find-my-blocks")}{" "}
            <ExternalLink target="_blank" href="https://conditionalblocks.com/">
              Conditional Blocks
            </ExternalLink>
          </span>
        ),
        icon: "randomize",
        variation: "info",
      });
    }

    if (post.isSyncedPattern) {
      tags.push({
        label: __("Synced Pattern", "find-my-blocks"),
        icon: "networking",
        variation: "warning",
      });
    }

    if (post.count > 1) {
      tags.push({
        label: `${post.count}x ` + blockName,
        icon: "list-view",
        variation: "info",
      });
    }

    if (post.isNested) {
      tags.push({
        label: __("Nested in: ", "find-my-blocks") + post.nestedBlockType,
        icon: "align-center",
        variation: "info",
      });
    }

    return tags;
  }
};

const MemoizedCard = React.memo(Card);

export function CardGrid({ posts, blockName = "" }) {
  if (!posts || posts.length < 1) {
    return (
      <div>
        <h2>{__("No locations found", "find-my-blocks")}</h2>
        {__(
          "Please select a block from the menu, or check the filters.",
          "find-my-blocks"
        )}
      </div>
    );
  }

  if (posts.length >= 2000) {
    return (
      <div>
        <p>
          <Icon icon={"warning"} />{" "}
          {__(
            "Performance virtualization applied to large list.",
            "find-my-blocks"
          )}
        </p>
        <div className="fmb-cards-virtualized">
          <VList
            style={{
              display: "grid", // Enable CSS grid layout
              height: "740px", // Set the height of the VList
            }}
          >
            {posts.map((post, index) => {
              return (
                <div className="fmb-card-virtualized">
                  <Card
                    key={blockName + post?.id}
                    post={post}
                    blockName={blockName}
                  />
                </div>
              );
            })}
          </VList>
        </div>
      </div>
    );
  }

  return (
    <div className="fmb-card-grid">
      {posts.map((post, index) => {
        return (
          <MemoizedCard
            key={blockName + post?.id}
            post={post}
            blockName={blockName}
          />
        );
      })}
    </div>
  );
}
