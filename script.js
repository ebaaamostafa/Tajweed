// script.js

// --- Main loader ---
async function loadTajweed() {
  try {
    const response = await fetch('data/tajweed.json');
    if (!response.ok) throw new Error('Failed to fetch JSON');
    const data = await response.json();

    const container = document.getElementById('tree');
    container.innerHTML = '';

    // Build the visual tree
    const tree = buildTree(data.tajweed);
    container.appendChild(tree);
  } catch (error) {
    document.getElementById('tree').textContent = 'تعذر تحميل بيانات التجويد.';
    console.error('Error loading Tajweed data:', error);
  }
}

// --- Recursive builder for the tree structure ---
function buildTree(nodes) {
  const ul = document.createElement('ul');
  ul.classList.add('tree');

  nodes.forEach(node => {
    const li = document.createElement('li');
    li.classList.add('tree-item');

    // Title (clickable)
    const title = document.createElement('span');
    title.classList.add('tree-title');
    title.textContent = node.title;
    li.appendChild(title);

    // Create info container (hidden initially)
    const info = document.createElement('div');
    info.classList.add('tree-info');
    info.style.display = 'none';

    if (node.explanation) {
      const exp = document.createElement('p');
      exp.textContent = node.explanation;
      info.appendChild(exp);
    }
    if (node.examples) {
      const ex = document.createElement('p');
      ex.innerHTML = `<strong>مثال:</strong> ${node.examples}`;
      info.appendChild(ex);
    }

    li.appendChild(info);

    // Recursive children
    if (node.children && node.children.length > 0) {
      const childTree = buildTree(node.children);
      childTree.style.display = 'none';
      li.appendChild(childTree);

      title.addEventListener('click', () => {
        const isVisible = childTree.style.display === 'block';
        childTree.style.display = isVisible ? 'none' : 'block';
        info.style.display = isVisible ? 'none' : 'block';
        li.classList.toggle('expanded', !isVisible);
      });
    } else {
      // No children: toggle explanation only
      title.addEventListener('click', () => {
        const isVisible = info.style.display === 'block';
        info.style.display = isVisible ? 'none' : 'block';
        li.classList.toggle('expanded', !isVisible);
      });
    }

    ul.appendChild(li);
  });

  return ul;
}

// Initialize
loadTajweed();
