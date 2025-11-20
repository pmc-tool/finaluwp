/**
 * UWP 2025 Manifesto Homepage JavaScript
 * Handles smooth scrolling, Real3D Flipbook initialization, and social sharing
 */

(function() {
  'use strict';

  /**
   * Initialize smooth scroll polyfill for iOS 12-14 compatibility
   */
  function initSmoothScroll() {
    if (typeof smoothscroll !== 'undefined' && smoothscroll.polyfill) {
      smoothscroll.polyfill();
    }
  }

  /**
   * Initialize Real3D Flipbook
   */
  function initFlipbook() {
    var $flipbookContainer = $('#flipbook');

    if ($flipbookContainer.length === 0) {
      console.warn('Flipbook container not found');
      return;
    }

    // Real3D Flipbook configuration
    $flipbookContainer.flipBook({
      // PDF source
      pdfUrl: 'pdf/manifesto.pdf',

      // Layout and display
      pageMode: 'double',
      singlePageMode: false,

      // Performance optimization
      textureSize: 2048,
      thumbnailTextureSize: 256,
      preloadPages: 3,

      // UI Controls
      controlsPosition: 'bottom',
      menuSelector: true,
      menuTransparent: false,
      menuOverBook: true,

      // Features
      downloadURL: 'pdf/manifesto.pdf',
      downloadEnabled: true,
      printEnabled: true,
      searchEnabled: true,

      // Table of Contents
      tableOfContents: true,
      tableOfContentsSidebar: true,

      // Zoom
      zoomMax: 4,
      zoomMin: 0.95,
      zoomStep: 0.1,

      // Page flipping
      flipDuration: 1000,
      flipSound: false,

      // Mobile optimization
      mobileScrollSupport: true,

      // Responsive behavior
      responsiveView: true,
      autoHeight: false,
      height: 600,

      // Colors to match UWP branding
      backgroundColor: '#2C3E50',
      backgroundTransparent: false,

      // Navigation
      btnNext: {
        enabled: true,
        title: 'Next page',
        icon: 'fa-angle-right'
      },
      btnPrev: {
        enabled: true,
        title: 'Previous page',
        icon: 'fa-angle-left'
      },
      btnZoomIn: {
        enabled: true,
        title: 'Zoom in',
        icon: 'fa-plus'
      },
      btnZoomOut: {
        enabled: true,
        title: 'Zoom out',
        icon: 'fa-minus'
      },
      btnAutoplay: {
        enabled: false
      },
      btnExpand: {
        enabled: true,
        title: 'Toggle fullscreen',
        icon: 'fa-expand'
      },
      btnShare: {
        enabled: false
      },
      btnDownloadPages: {
        enabled: false
      },
      btnDownloadPdf: {
        enabled: true,
        title: 'Download PDF',
        icon: 'fa-download',
        url: 'pdf/manifesto.pdf'
      },
      btnSound: {
        enabled: false
      },
      btnPrint: {
        enabled: true,
        title: 'Print',
        icon: 'fa-print'
      },
      btnThumbs: {
        enabled: true,
        title: 'Pages',
        icon: 'fa-th-large'
      },
      btnToc: {
        enabled: true,
        title: 'Table of Contents',
        icon: 'fa-list-ul'
      },
      btnBookmark: {
        enabled: false
      },
      btnNotes: {
        enabled: false
      },
      btnSelect: {
        enabled: true
      },
      btnSearch: {
        enabled: true,
        title: 'Search',
        icon: 'fa-search'
      }
    });

    // Handle flipbook load events
    $flipbookContainer.on('flipbookloaded', function() {
      console.log('Flipbook loaded successfully');
    });

    $flipbookContainer.on('flipbookerror', function(e, error) {
      console.error('Flipbook error:', error);
    });
  }

  /**
   * Handle smooth scroll for anchor links
   */
  function initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');

        // Ignore empty hash or hash-only links
        if (href === '#' || href === '#!') {
          return;
        }

        var target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          // Smooth scroll to target
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  /**
   * Handle sticky header visibility on scroll
   */
  function initStickyHeader() {
    var header = document.getElementById('header');
    var scrollThreshold = 100;
    var lastScroll = 0;

    window.addEventListener('scroll', function() {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  /**
   * Social sharing functionality
   * Uses Web Share API with fallbacks for Facebook and WhatsApp
   */
  window.shareManifesto = function() {
    var shareData = {
      title: 'UWP 2025 Manifesto: Reclaiming Our Future',
      text: 'Read the United Workers Party 2025 Manifesto - A transformative agenda for rebuilding trust, restoring confidence, and renewing hope.',
      url: window.location.href
    };

    // Try Web Share API first (mobile devices)
    if (navigator.share) {
      navigator.share(shareData)
        .then(function() {
          console.log('Successfully shared');
        })
        .catch(function(error) {
          console.log('Error sharing:', error);
        });
    } else {
      // Fallback: Show share options
      var shareUrl = encodeURIComponent(window.location.href);
      var shareText = encodeURIComponent(shareData.text);

      var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl;
      var whatsappUrl = 'https://api.whatsapp.com/send?text=' + shareText + '%20' + shareUrl;
      var twitterUrl = 'https://twitter.com/intent/tweet?text=' + shareText + '&url=' + shareUrl;

      // Create simple modal with share options
      var modalHtml =
        '<div id="share-modal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center;">' +
        '  <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 400px; width: 90%;">' +
        '    <h3 style="margin-top: 0;">Share Manifesto</h3>' +
        '    <div style="display: flex; flex-direction: column; gap: 1rem;">' +
        '      <a href="' + facebookUrl + '" target="_blank" style="padding: 1rem; background: #1877F2; color: white; text-decoration: none; border-radius: 4px; text-align: center;">Share on Facebook</a>' +
        '      <a href="' + whatsappUrl + '" target="_blank" style="padding: 1rem; background: #25D366; color: white; text-decoration: none; border-radius: 4px; text-align: center;">Share on WhatsApp</a>' +
        '      <a href="' + twitterUrl + '" target="_blank" style="padding: 1rem; background: #1DA1F2; color: white; text-decoration: none; border-radius: 4px; text-align: center;">Share on Twitter</a>' +
        '      <button onclick="document.getElementById(\'share-modal\').remove()" style="padding: 1rem; background: #ccc; border: none; border-radius: 4px; cursor: pointer;">Close</button>' +
        '    </div>' +
        '  </div>' +
        '</div>';

      document.body.insertAdjacentHTML('beforeend', modalHtml);

      // Close modal on background click
      document.getElementById('share-modal').addEventListener('click', function(e) {
        if (e.target === this) {
          this.remove();
        }
      });
    }
  };

  /**
   * Mobile menu toggle functionality
   */
  function initMobileMenu() {
    var menuToggle = document.querySelector('.mobile-menu-toggle');
    var nav = document.querySelector('header nav');
    var navLinks = document.querySelectorAll('header nav a');

    if (menuToggle) {
      // Toggle menu on button click
      menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');

        // Update aria-expanded
        var isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);

        // Prevent body scroll when menu is open
        if (isExpanded) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });

      // Close menu when clicking a link
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          nav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
          if (nav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
          }
        }
      });
    }
  }

  /**
   * Initialize all functionality when DOM is ready
   */
  $(document).ready(function() {
    initSmoothScroll();
    initFlipbook();
    initAnchorLinks();
    initStickyHeader();
    initMobileMenu();

    console.log('UWP Homepage initialized');
  });

})();
