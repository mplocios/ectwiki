export default function Features() {
  return (
    <>
      <h1>Features</h1>
      <p className="page-desc">Custom systems layered on top of Minecraft survival.</p>

      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">MMO Combat</div>
          <div className="card-text">Custom weapons and armor with random stat rolls. Skills for mining, farming, fishing, and fighting — they all level up automatically as you play.</div>
        </div>
        <div className="card">
          <div className="card-title">Elite Dungeons</div>
          <div className="card-text">Custom bosses and dungeon instances throughout the world. Use <code>/party</code> to form a team before entering. Rare drops and unique gear await.</div>
        </div>
        <div className="card">
          <div className="card-title">Custom Fishing</div>
          <div className="card-text">Over 130 custom fish across 6 rarity tiers — plus hidden Legendary and Divine fish with extreme catch conditions. Level up your fishing, build a Fishing Totem, and craft augments. Use <code>/fish menu</code> to get started.</div>
        </div>
        <div className="card">
          <div className="card-title">Teams</div>
          <div className="card-text">Form teams with other players. Share a team chest, team chat, and set team warps in Frontier or Elysium.</div>
        </div>
        <div className="card">
          <div className="card-title">Skyblock Islands</div>
          <div className="card-text">Private skyblock islands. Start your own island, invite friends, and build in a separate dimension.</div>
        </div>
        <div className="card">
          <div className="card-title">Land Claims</div>
          <div className="card-text">Protect your builds with GriefPrevention claims. Claim land with a golden shovel. Earn more claim blocks over time.</div>
        </div>
        <div className="card">
          <div className="card-title">Custom Structures</div>
          <div className="card-text">Custom buildings, dungeons, and loot chests across the Frontier. Every chest is per-player — no stealing.</div>
        </div>
        <div className="card">
          <div className="card-title">Crates</div>
          <div className="card-text">Open crates at spawn for rare items, custom gear, and cosmetics. Keys drop from bosses and events.</div>
        </div>
        <div className="card">
          <div className="card-title">Custom Enchants</div>
          <div className="card-text">Powerful enchantments beyond vanilla. Find them in loot or buy from the enchant shop.</div>
        </div>
        <div className="card">
          <div className="card-title">Bedrock Support</div>
          <div className="card-text">Bedrock players join via Geyser. Most features work cross-platform including custom models.</div>
        </div>
      </div>
    </>
  );
}
