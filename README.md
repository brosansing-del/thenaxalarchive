# Security Force Camps patch

Adds:
- data/sf-camps.csv
- public/data/sf-camps.csv
- src/pages/data-visuals/security-force-camps.astro

Header dropdown entry:
```astro
<a href={url('data-visuals/security-force-camps/')}>
  <span class="dropdown-number">04</span>
  <span>
    <strong>Security Force Camps Since 2013</strong>
    <small>Year-wise and state-wise establishment of SF camps</small>
  </span>
</a>
```

2026 is partial through 20 March, as shown in the supplied table.
