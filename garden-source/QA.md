# 3D QA
Production build passed. Chrome tests at 1440x900 and 390x844 verified WASD movement, map navigation, lantern interaction and final note with no JavaScript errors or horizontal overflow. At 360x800 the virtual thumbstick moved the player, all four landmark messages opened, sound toggled off, and reset returned the player to (0,0,21). All four discoveries were retained during exploration.

Visual screenshots inspected after blossom refinement. Static batching reduced visible scene calls from approximately 590 to 70, but about 940k triangles remain; these measurements are not a physical-phone frame-rate certification. High detail and multiple lights can still be costly on older phones. The Vite build emits a bundle-size advisory for the roughly 512kB JavaScript bundle (about 132kB gzip). No claim of equivalence to Bruno Simon's production quality.

Screenshots and machine-readable checks are supplied separately. Art is original procedural stylized 3D rather than the former painting. The earlier illustrated site remains available at illustrated.html.
