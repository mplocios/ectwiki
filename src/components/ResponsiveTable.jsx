import { useEffect, useRef, useState, useCallback } from 'react';

export default function ResponsiveTable({ children, className = '' }) {
  const wrapRef = useRef(null);
  const [hiddenCols, setHiddenCols] = useState([]);
  const [expanded, setExpanded] = useState({});

  const recalc = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const table = wrap.querySelector('table');
    if (!table) return;

    const ths = Array.from(table.querySelectorAll('thead th'));
    if (ths.length < 2) return;

    // Reset visibility to measure natural widths
    ths.forEach(th => { th.style.display = ''; });
    table.querySelectorAll('tbody tr').forEach(tr => {
      Array.from(tr.querySelectorAll('td')).forEach(td => { td.style.display = ''; });
    });

    const containerW = wrap.clientWidth;
    const minColW = 100;

    // Measure total natural width
    table.style.width = 'auto';
    const naturalW = table.scrollWidth;
    table.style.width = '';

    if (naturalW <= containerW) {
      setHiddenCols([]);
      return;
    }

    // Hide columns from right to left (keep first column always visible)
    const hidden = [];
    let currentW = naturalW;
    for (let i = ths.length - 1; i >= 1; i--) {
      if (currentW <= containerW) break;
      const colW = ths[i].offsetWidth;
      hidden.unshift(i);
      currentW -= colW;
    }

    setHiddenCols(hidden);
    setExpanded({});
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [recalc]);

  // After children change, recalculate
  useEffect(() => { recalc(); }, [children, recalc]);

  const toggleRow = (rowIdx) => {
    setExpanded(prev => ({ ...prev, [rowIdx]: !prev[rowIdx] }));
  };

  const hasHidden = hiddenCols.length > 0;

  // Get headers for hidden columns
  const getHeaders = () => {
    const wrap = wrapRef.current;
    if (!wrap) return [];
    const ths = wrap.querySelectorAll('thead th');
    return hiddenCols.map(i => ths[i]?.textContent || '');
  };

  // Get cell content for hidden columns in a row
  const getCellContent = (tr) => {
    const tds = tr.querySelectorAll('td');
    return hiddenCols.map(i => tds[i]?.innerHTML || '');
  };

  // Apply hidden columns via DOM after render
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const table = wrap.querySelector('table');
    if (!table) return;

    const ths = table.querySelectorAll('thead th');
    const rows = table.querySelectorAll('tbody > tr:not(.rt-child-row)');

    // Show all first
    ths.forEach(th => { th.style.display = ''; });
    rows.forEach(tr => {
      Array.from(tr.querySelectorAll('td')).forEach(td => { td.style.display = ''; });
    });

    // Remove old expand cells and child rows
    table.querySelectorAll('.rt-expand-cell, .rt-expand-th').forEach(el => el.remove());
    table.querySelectorAll('.rt-child-row').forEach(el => el.remove());

    if (!hasHidden) return;

    // Hide columns
    hiddenCols.forEach(i => {
      if (ths[i]) ths[i].style.display = 'none';
      rows.forEach(tr => {
        const tds = tr.querySelectorAll('td');
        if (tds[i]) tds[i].style.display = 'none';
      });
    });

    // Add expand header
    const thead = table.querySelector('thead tr');
    if (thead) {
      const expandTh = document.createElement('th');
      expandTh.className = 'rt-expand-th';
      expandTh.style.width = '30px';
      expandTh.style.padding = '10px 6px';
      thead.insertBefore(expandTh, thead.firstChild);
    }

    // Add expand buttons and child rows
    const headers = hiddenCols.map(i => ths[i]?.textContent || '');

    rows.forEach((tr, rowIdx) => {
      const tds = Array.from(tr.querySelectorAll('td'));
      const expandTd = document.createElement('td');
      expandTd.className = 'rt-expand-cell';
      expandTd.innerHTML = `<button class="rt-expand-btn" data-row="${rowIdx}">${expanded[rowIdx] ? '−' : '+'}</button>`;
      tr.insertBefore(expandTd, tr.firstChild);

      // Create child row
      if (expanded[rowIdx]) {
        const childRow = document.createElement('tr');
        childRow.className = 'rt-child-row';
        const childTd = document.createElement('td');
        const visibleCols = Array.from(ths).length - hiddenCols.length + 1; // +1 for expand col
        childTd.colSpan = visibleCols;
        childTd.className = 'rt-child-cell';

        let html = '<ul class="rt-child-list">';
        hiddenCols.forEach((colIdx, j) => {
          const cellHtml = tds[colIdx]?.innerHTML || '';
          html += `<li><span class="rt-child-label">${headers[j]}</span><span class="rt-child-value">${cellHtml}</span></li>`;
        });
        html += '</ul>';
        childTd.innerHTML = html;
        childRow.appendChild(childTd);

        tr.after(childRow);
      }
    });

    // Attach click handlers
    const btns = table.querySelectorAll('.rt-expand-btn');
    btns.forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.row);
        toggleRow(idx);
      };
    });
  }, [hiddenCols, expanded, hasHidden, children]);

  return (
    <div ref={wrapRef} className={`rt-wrapper ${className}`}>
      {children}
    </div>
  );
}
