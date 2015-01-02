matrix3d.js
===========

Forked from https://gist.github.com/f5io/7466669

> Use Matrix3D.multiply for doing calculations, e.g.:

```js
var mtx1 = Matrix3D.create();
var mtx2 = Matrix3D.create();

Matrix3D.rotateX(mtx1, 30);
Matrix3D.rotateX(mtx2, 45);

Matrix3D.multiply(mtx1, mtx2, mtx1);
```

> In the above example, mtx1 should now have a rotation of 75 degrees on the X axis.
