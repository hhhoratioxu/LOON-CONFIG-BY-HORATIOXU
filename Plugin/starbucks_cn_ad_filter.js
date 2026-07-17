const url = $request.url || "";
const originalBody = $response.body || "";

const protectedPath = /\/(?:login|auth|account|profile|member|membership|rewards|order|orders|cart|checkout|payment|payments|pay|wallet|coupon|coupons|gift|transaction|transactions)(?:\/|\?|$)/i;
const targetPath = /\/(?:home|homepage|index|startup|launch|splash|banner|banners|advert|advertisement|ads|marketing|campaign|campaigns|promotion|promotions|config|configuration)(?:\/|\?|$)/i;

const adKey = /^(?:ad|ads|adList|advert|advertList|advertisement|advertisements|advertising|banner|banners|bannerList|homeBanner|homeBanners|marketingBanner|marketingBanners|popup|popups|popupList|popWindow|floatingWindow|floatWindow|splash|splashAd|splashAds|splashList|startupAd|startupAds|campaignBanner|promotionBanner)$/i;
const adFlagKey = /^(?:showAd|showAds|showAdvert|showAdvertisement|showBanner|showPopup|showSplash|enableAd|enableAds|adEnabled|adsEnabled)$/i;

function emptyLike(value) {
  if (Array.isArray(value)) return [];
  if (value && typeof value === "object") return {};
  if (typeof value === "boolean") return false;
  if (typeof value === "number") return 0;
  return "";
}

function clean(node, changed, depth = 0) {
  if (!node || typeof node !== "object" || depth > 12) return;
  if (Array.isArray(node)) {
    node.forEach(item => clean(item, changed, depth + 1));
    return;
  }
  Object.keys(node).forEach(key => {
    if (adFlagKey.test(key)) {
      node[key] = false;
      changed.push(key);
    } else if (adKey.test(key)) {
      node[key] = emptyLike(node[key]);
      changed.push(key);
    } else {
      clean(node[key], changed, depth + 1);
    }
  });
}

if (protectedPath.test(url) || !targetPath.test(url)) {
  $done({});
} else {
  try {
    const obj = JSON.parse(originalBody);
    const changed = [];
    clean(obj, changed);
    if (changed.length) {
      $done({ body: JSON.stringify(obj) });
    } else {
      $done({});
    }
  } catch(e) {
    $done({});
  }
}
