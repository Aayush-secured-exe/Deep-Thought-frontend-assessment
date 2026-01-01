import "./AssetCard.css";
import bulbIcon from "/bulb.svg";
import msgIcon from "/msg.svg";
import doubtIcon from "/doubt.svg";
import flowerIcon from "/flower.svg";
import Arrow from "/up-arrow.svg";
import LastCard from "../LastCard";

function AssetCard({ asset }) {
  return (
    <div className={`asset-card ${asset.asset_content_type}`}>
      <div className="asset-header">
        <h3>{asset.asset_title}</h3>
        <span className="asset-info">
          <img src="/info.png" alt="info-logo" />
        </span>
      </div>

      <p className="asset-description">
        <strong>Description:</strong> {asset.asset_description}
      </p>

      <div className="asset-body">
        {asset.asset_content_type === "video" && (
          <iframe
            src={asset.asset_content.trim()}
            title={asset.asset_title}
            allowFullScreen
          />
        )}

        {asset.asset_content_type === "threadbuilder" && (
          <>
            <div>
              <p className="thread-title">
                <img src={Arrow} alt="flower" />
                Thread A
              </p>
              <div className="thread-input-row">
                <div className="thread-box">
                  <div className="thread-box-title">Sub thread 1</div>
                  <textarea
                    className="thread-box-input"
                    placeholder="Enter Text here"
                  />
                </div>
                <div className="thread-box">
                  <div className="thread-box-title">Sub thread 2</div>
                  <textarea
                    className="thread-box-input"
                    placeholder="Enter Text here"
                  />
                </div>
              </div>

              <div className="thread-toolbar">
                <div className="thread-icons">
                  <span className="icon-placeholder">
                    <img src={bulbIcon} alt="bulb" />
                  </span>
                  <span className="icon-placeholder">
                    <img src={msgIcon} alt="msg" />
                  </span>
                  <span className="icon-placeholder">
                    <img src={doubtIcon} alt="doubt" />
                  </span>
                  <span className="icon-placeholder">
                    <img src={flowerIcon} alt="flower" />
                  </span>
                </div>

                <div className="thread-dropdowns poppins-semibold">
                  <button>
                    Select Categ <img src={Arrow} alt="flower" />
                  </button>
                  <button>
                    Select Proces <img src={Arrow} alt="flower" />
                  </button>
                </div>
              </div>
              <button className="subthread-btn">
                <span>+</span> Sub-thread
              </button>
              <div className="thread-input-row">
                <div className="thread-box">
                  <div className="thread-box-title">Summary of thread A</div>
                  <textarea className="thread-box-input" placeholder="" />
                </div>
              </div>
            </div>
          </>
        )}

        {asset.asset_type === "input_asset" &&
          asset.asset_content_type === "article" && (
            <div className="input-asset">
              <label className="input-label">Title</label>
              <input className="input-title" placeholder="" />

              <label className="input-label">Content</label>

              <div className="editor-wrapper">
                <div className="editor-toolbar-top">
                  <span>File</span>
                  <span>Edit</span>
                  <span>View</span>
                  <span>Insert</span>
                  <span>Format</span>
                  <span>Tools</span>
                  <span>Table</span>
                  <span>Help</span>
                </div>

                <div className="editor-toolbar-bottom">
                  <span className="icon arrow-left">
                    <img src="/left-arrow.svg" alt="arrow" />
                  </span>
                  <span className="icon arrow-right">
                    <img src="/right-arrow.svg" alt="arrow" />
                  </span>
                  <span className="icon expand">
                    <img src="/expand.svg" alt="arrow" />
                  </span>

                  <span className="paragraph-pill">Paragraph</span>

                  <span className="icon dots"></span>
                </div>

                <div className="editor-canvas"></div>
              </div>
            </div>
          )}
        {asset.asset_type === "display_asset" &&
          asset.asset_content_type === "article" && <LastCard asset={asset} />}
      </div>
    </div>
  );
}

export default AssetCard;
