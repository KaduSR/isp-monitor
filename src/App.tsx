
import React, { useState } from "react"
import "./styles.css"

const LINKS = [
  {id:1, name:"Cliente 001", ip:"192.168.1.10", status:"up", latency:12, uptime:99.8},
  {id:2, name:"Cliente 002", ip:"192.168.1.20", status:"up", latency:8, uptime:100},
  {id:3, name:"Cliente 003", ip:"192.168.1.30", status:"down", latency:0, uptime:87.2},
  {id:4, name:"Cliente 004", ip:"192.168.1.40", status:"up", latency:15, uptime:99.5},
  {id:5, name:"Cliente 005", ip:"192.168.1.50", status:"up", latency:22, uptime:98.1},
  {id:6, name:"Cliente 006", ip:"192.168.1.60", status:"degraded", latency:180, uptime:95.3},
  {id:7, name:"Cliente 007", ip:"192.168.1.70", status:"up", latency:10, uptime:99.9},
  {id:8, name:"Cliente 008", ip:"192.168.1.80", status:"down", latency:0, uptime:91.4},
]

export default function App() {
  const [filter, setFilter] = useState("all")
  const [detail, setDetail] = useState<typeof LINKS[0] | null>(null)
  const filtered = filter === "all" ? LINKS : LINKS.filter(l => l.status === filter)
  const upCount = LINKS.filter(l => l.status === "up").length
  const downCount = LINKS.filter(l => l.status === "down").length

  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <div><h1>ISP Monitor</h1></div>
          <div style={{display: "flex", gap: 8}}>
            <span className="badge up">{upCount} Online</span>
            <span className="badge down">{downCount} Offline</span>
          </div>
        </div>
      </header>
      <main className="container">
        <div style={{display: "flex", gap: 8, padding: "16px 0"}}>
          {["all", "up", "down"].map(f => (
            <button key={f} className={"tab-btn " + (filter === f ? "active" : "")} onClick={() => setFilter(f)}>
              {f === "all" ? "Todos" : f === "up" ? "Online" : "Offline"}
            </button>
          ))}
        </div>
        <div className="grid">
          {filtered.map(link => (
            <div key={link.id} className={"card " + link.status} onClick={() => setDetail(link)}>
              <div className="card-header"><span className={"dot " + link.status} /><strong>{link.name}</strong></div>
              <div className="card-body">{link.ip} | {link.status === "up" ? link.latency + "ms" : "Offline"} | {link.uptime}%</div>
            </div>
          ))}
        </div>
      </main>
      {detail && (
        <div className="overlay" onClick={() => setDetail(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button onClick={() => setDetail(null)}>X</button>
            <h3>{detail.name}</h3>
            <p>IP: {detail.ip}</p>
            <p>Status: {detail.status}</p>
            <p>Latencia: {detail.latency || "N/A"}ms</p>
            <p>Uptime: {detail.uptime}%</p>
          </div>
        </div>
      )}
    </div>
  )
}
