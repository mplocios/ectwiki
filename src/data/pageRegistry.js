import Welcome from '../pages/Welcome';
import { Town, Elysium, Frontier } from '../pages/Worlds';
import Features from '../pages/Features';
import Rules from '../pages/Rules';
import Economy from '../pages/Economy';
import { RanksOverview, PeasantTier, AdventurerTier, SquireTier, KnightTier, EliteTier, ChampionTier } from '../pages/Ranks';
import Trials from '../pages/Trials';
import Commands from '../pages/Commands';
import Tips from '../pages/Tips';
import { Looloonah, Scout, Haven, Anika, Enchantress, Decipherer, TaskMaster, AstroTommy, Auctioneer } from '../pages/Npcs';
import { Waystones, Rtp, Claims, Teams, Selling, Island, ChestShop, DimensionLock, DeathPenalty, AfkRewards, RenameToken, Dungeons, DungeonParty, LuckyBlock, PublicWarps, BedrockPlayers } from '../pages/Guides';
import Fishing from '../pages/Fishing';
import Faq from '../pages/Faq';
import Support from '../pages/Support';

const PAGES = {
  welcome: Welcome,
  'worlds/town': Town,
  'worlds/elysium': Elysium,
  'worlds/frontier': Frontier,
  features: Features,
  rules: Rules,
  economy: Economy,
  'ranks/overview': RanksOverview,
  'ranks/peasant': PeasantTier,
  'ranks/adventurer': AdventurerTier,
  'ranks/squire': SquireTier,
  'ranks/knight': KnightTier,
  'ranks/elite': EliteTier,
  'ranks/champion': ChampionTier,
  trials: Trials,
  commands: Commands,
  tips: Tips,
  'npcs/looloonah': Looloonah,
  'npcs/scout': Scout,
  'npcs/haven': Haven,
  'npcs/anika': Anika,
  'npcs/enchantress': Enchantress,
  'npcs/decipherer': Decipherer,
  'npcs/taskmaster': TaskMaster,
  'npcs/astrotommy': AstroTommy,
  'guides/waystones': Waystones,
  'guides/rtp': Rtp,
  'guides/claims': Claims,
  'guides/teams': Teams,
  'guides/selling': Selling,
  'guides/island': Island,
  'guides/chestshop': ChestShop,
  'guides/dimensionlock': DimensionLock,
  'guides/deathpenalty': DeathPenalty,
  'guides/afkrewards': AfkRewards,
  'guides/renametoken': RenameToken,
  'guides/dungeons': Dungeons,
  'guides/party': DungeonParty,
  'guides/luckyblock': LuckyBlock,
  'guides/publicwarps': PublicWarps,
  'guides/fishing': Fishing,
  'help/bedrock-gui': BedrockPlayers,
  'npcs/auctioneer': Auctioneer,
  'help/faq': Faq,
  'help/support': Support,
};

export default PAGES;
