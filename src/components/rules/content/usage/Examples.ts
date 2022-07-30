/* ----------------------------
 *      ANNOTATION EXAMPLES
 * ---------------------------- */
export const ANNOTATION_NAME_LATEX: string = `${`% name : myEquation
\\begin{equation}
...
\\end{equation}`}`;

export const ANNOTATION_RETURN_TYPE_LATEX: string = `${`% return : int
\\begin{equation}
...
\\end{equation}`}`;

export const ANNOTATION_SINGLE_TYPE_VARIABLE_LATEX: string = `${`% name : myEquation
\\begin{equation}
% [x] : int
...
\\end{equation}`}`;

export const ANNOTATION_MULTI_TYPE_VARIABLE_LATEX: string = `${`% name : myEquation
\\begin{equation}
% [x, y] : int, [w] : long
% [z] : short
...
\\end{equation}`}`;

export const ANNOTATION_ARRAY_TYPE_VARIABLE_LATEX: string = `${`% name : myEquation
\\begin{equation}
% [x] : int[10]
% [y] : short[10][5]
...
\\end{equation}`}`;

/* ----------------------------
 *      VARIABLES EXAMPLES
 * ---------------------------- */

export const VARIABLES_SCALAR_TYPE_LATEX: string = `${`\\begin{equation}
  result = c          // c is a scalar variable
\\end{equation}`}`;

export const VARIABLES_ONE_DIMENSION_ARRAY_TYPE_LATEX: string = `${`\\begin{equation}
  % [c] : int[10]
  result = c_{2}      // c is a one-dimension array variable
\\end{equation}`}`;

export const VARIABLES_MULTI_DIMENSIONAL_ARRAY_TYPE_LATEX: string = `${`\\begin{equation}
  % [c] : int[10][10]
  result = c_{0, 5}   // c is a two-dimension array variable
\\end{equation}`}`;

/* ----------------------------
 *        POWERS EXAMPLES
 * ---------------------------- */

export const POWER_SIMPLE_VARIABLE_LATEX: string = `${`% name: simplePowerExample 
\\begin{equation}
  result = 2^{3}
\\end{equation}`}`;

export const POWER_COMPLEX_VARIABLE_LATEX: string = `${`% name: complexPowerExample 
\\begin{equation}
  result = (2 - \\sin{0.4})^{3 - c}
\\end{equation}`}`;

/* ----------------------------
 *      LOGARITHM EXAMPLES
 * ---------------------------- */
