var metric
  , imperial;

metric = {
  TKW: {
    name: {
      singular: 'Thousand Kernel Weight'
    , plural: 'Thousand Kernel Weight'
    }
  , to_anchor: 1
  }
};

imperial = {
  'seeds/lb': {
    name: {
      singular: 'seeds/lb'
    , plural: 'seeds/lb'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'TKW'
    , transform: function (TKW) { return Math.round(453592 / TKW) }
    }
  , imperial: {
      unit: 'seeds/lb'
    , transform: function (SeedLb) { return 453592 / SeedLb  }
    }
  }
};
