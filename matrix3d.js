(function(w) {
    
    var Matrix3D = {};

    Matrix3D._deg2rad = function(deg) {
        return deg * (Math.PI / 180);
    };

    Matrix3D.create = function() {
        var out, args = Array.prototype.slice.call(argumenets);
        if (args.length > 0 && args.length < 16) throw 'Invalid arguments supplied!';
        if (args.length === 0) {
            out = new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
        } else {
            out = new Float32Array(args);
        }
        return out;
    };

    Matrix3D.fromTransform = function(str) {
        var r = str.match(/([\d.-]+(?!\w))+/g);
        if (r) {
            return new Float32Array([
                r[0],   r[1],   r[2],   r[3],
                r[4],   r[5],   r[6],   r[7],
                r[8],   r[9],   r[10],  r[11],
                r[12],  r[13],  r[14],  r[15]
            ]);
        } else {
            return;
        }
    };

    Matrix3D.identity = function(out) {
        out[0] = out[5] = out[10] = out[15] = 1;
        out[1] = out[2] = out[3] = out[4] = out[6] = out[7] = out[8] = out[9] = out[11] = out[12] = out[13] = out[14] = 0;
    };

    Matrix3D.multiply = function(mx1, mx2, out) {
        var a1 = mx1[0], b1 = mx1[1], c1 = mx1[2], d1 = mx1[3],
            e1 = mx1[4], f1 = mx1[5], g1 = mx1[6], h1 = mx1[7],
            i1 = mx1[8], j1 = mx1[9], k1 = mx1[10], l1 = mx1[11],
            m1 = mx1[12], n1 = mx1[13], o1 = mx1[14], p1 = mx1[15];

        var a2 = mx2[0], b2 = mx2[1], c2 = mx2[2], d2 = mx2[3],
            e2 = mx2[4], f2 = mx2[5], g2 = mx2[6], h2 = mx2[7],
            i2 = mx2[8], j2 = mx2[9], k2 = mx2[10], l2 = mx2[11],
            m2 = mx2[12], n2 = mx2[13], o2 = mx2[14], p2 = mx2[15];

        out[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
        out[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
        out[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
        out[3] = 0;
        out[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
        out[5] = e1 * b2 + f1 * f2 + g1 * f2 + h1 * n2;
        out[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
        out[7] = 0;
        out[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
        out[9] = i1 * b2 + j1 * f2 + k1 * f2 + l1 * n2;
        out[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
        out[11] = 0;
        out[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
        out[13] = m1 * b2 + n1 * f2 + o1 * f2 + p1 * n2;
        out[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
        out[15] = 1;
    };

    Matrix3D.isEqual = function(mx1, mx2) {
        var a1 = mx1[0], b1 = mx1[1], c1 = mx1[2], d1 = mx1[3],
            e1 = mx1[4], f1 = mx1[5], g1 = mx1[6], h1 = mx1[7],
            i1 = mx1[8], j1 = mx1[9], k1 = mx1[10], l1 = mx1[11],
            m1 = mx1[12], n1 = mx1[13], o1 = mx1[14], p1 = mx1[15];

        var a2 = mx2[0], b2 = mx2[1], c2 = mx2[2], d2 = mx2[3],
            e2 = mx2[4], f2 = mx2[5], g2 = mx2[6], h2 = mx2[7],
            i2 = mx2[8], j2 = mx2[9], k2 = mx2[10], l2 = mx2[11],
            m2 = mx2[12], n2 = mx2[13], o2 = mx2[14], p2 = mx2[15];

        if (a1 === a2 && b1 === b2 && c1 === c2 && d1 === d2 &&
            e1 === e2 && f1 === f2 && g1 === g2 && h1 === h2 &&
            i1 === i2 && j1 === j2 && k1 === k2 && l1 === l2 &&
            m1 === m2 && n1 === n2 && o1 === o2 && p1 === p2) {
            return true;
        } else {
            return false;
        }
    };

    Matrix3D.translate = function(out, tx, ty, tz) {
        out[12] = tx;
        out[13] = ty || out[13];
        out[14] = tz || out[14];
    };

    Matrix3D.translateX = function(out, tx) {
        out[12] = tx;
    };

    Matrix3D.translateY = function(out, ty) {
        out[13] = ty;
    };

    Matrix3D.translateZ = function(out, tz) {
        out[14] = tz;
    };

    Matrix3D.scale = function(out, sx, sy, sz) {
        out[0] = sx;
        out[5] = sy || out[5];
        out[10] = sz || out[10];
    };

    Matrix3D.scaleX = function(out, sx) {
        out[0] = sx;
    };

    Matrix3D.scaleY = function(out, sy) {
        out[5] = sy;
    };

    Matrix3D.scaleZ = function(out, sz) {
        out[10] = sz;
    };

    Matrix3D.rotate = function(out, deg) {
        var rad = Matrix3D._deg2rad(deg),
            cos = Math.cos(rad),
            sin = Math.sin(rad);

        out[0] = cos;
        out[1] = sin;
        out[4] = -sin;
        out[5] = cos;
    };

    Matrix3D.rotateX = function(out, deg) {
        var rad = Matrix3D._deg2rad(deg),
            cos = Math.cos(rad),
            sin = Math.sin(rad);

        out[5] = cos;
        out[6] = sin;
        out[9] = -sin;
        out[10] = cos;
    };

    Matrix3D.rotateY = function(out, deg) {
        var rad = Matrix3D._deg2rad(deg),
            cos = Math.cos(rad),
            sin = Math.sin(rad);

        out[0] = cos;
        out[2] = sin;
        out[8] = -sin;
        out[10] = cos;
    };

    Matrix3D.rotateZ = function(out, deg) {
        Matrix3D.rotate(out, deg);
    };

    Matrix3D.skew = function(out, xdeg, ydeg) {
        var xrad = Matrix3D._deg2rad(xdeg),
            yrad = ydeg ? Matrix3D._deg2rad(ydeg) : 0,
            xtan = Math.tan(xrad),
            ytan = Math.tan(yrad);

        out[4] = xtan;
        out[1] = ytan;
    };

    Matrix3D.skewX = function(out, xdeg) {
        var rad = Matrix3D._deg2rad(xdeg),
            tan = Math.tan(rad);

        out[4] = tan;
    };

    Matrix3D.skewY = function(out, ydeg) {
        var rad = Matrix3D._deg2rad(ydeg),
            tan = Math.tan(rad);

        out[1] = tan;
    };

    Matrix3D.toTransform = function(mx) {
        return 'matrix(' +  mx[0] + ',' + mx[1] + ',' +
                            mx[4] + ',' + mx[5] + ',' +
                            mx[12] + ',' + mx[13] + ')';
    };

    Matrix3D.toTransform3D = function(mx) {
        return 'matrix3d(' +    mx[0] + ',' + mx[1] + ',' + mx[2] + ',' + mx[3] + ',' +
                                mx[4] + ',' + mx[5] + ',' + mx[6] + ',' + mx[7] + ',' +
                                mx[8] + ',' + mx[9] + ',' + mx[10] + ',' + mx[11] + ',' +
                                mx[12] + ',' + mx[13] + ',' + mx[14] + ',' + mx[15] + ')';
    };

    w.Matrix3D = Matrix3D;

})(window);