import React from 'react';

function StockInfo({
  symbol,
  companyName,
  primaryExchange,
  latestPrice,
  latestSource,
  week52High,
  week52Low
}) {
  return (
    <div>
    <h2>{ symbol }: { companyName }</h2>
    <h3>{ latestPrice } ({ latestSource} )</h3>
    <dl>
      <dt>Week 52 High</dt>
      <dd>{ week52High }</dd>

      <dt>Week 52 Low</dt>
      <dd>{ week52Low }</dd>

      <dt>Exchange</dt>
      <dd>{ primaryExchange }</dd>
    </dl>
  </div>
  );
}

export default StockInfo;
