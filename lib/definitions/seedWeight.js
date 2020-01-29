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
  'Seed/lb': {
    name: {
      singular: 'Seed/lb'
    , plural: 'Seed/lb'
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
    , transform: function (TKW) { return 453592 / TKW }
    }
  , imperial: {
      unit: 'Seed/lb'
    , transform: function (SeedLb) { return 453592 / SeedLb  }
    }
  }
};
