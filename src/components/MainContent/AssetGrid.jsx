import AssetCard from "./AssetCard";
import "./AssetGrid.css";

function AssetGrid({ assets }) {
  if (!assets || assets.length === 0) return null;

  return (
    <div className="asset-grid">
      {assets.map((asset) => (
        <AssetCard key={asset.asset_id} asset={asset} />
      ))}
    </div>
  );
}

export default AssetGrid;
