import React from "react";


type statCardProps  = {
    title: string;
    value: string;
    extra: string;
}

const StatCard: React.FC<statCardProps> =({ title, value, extra }) =>{
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
      <span className="text-xs text-green-500">{extra}</span>
    </div>
  );
}

export default StatCard;