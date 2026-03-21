{
    description = "Development environment";

    inputs = {
        nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
        flake-utils.url = "github:numtide/flake-utils";
        playwright.url = "github:pietdevries94/playwright-web-flake";
    };

    outputs = inputs@{ self, nixpkgs, flake-utils, playwright, ... }:
        flake-utils.lib.eachSystem [ "x86_64-linux" ] (system:
            let
                overlay = final: prev: {
                    inherit (playwright.packages.${system}) playwright-test playwright-driver;
                };
                pkgs = import nixpkgs {
                    inherit system;
                    overlays = [ overlay ];
                };

            in rec {
                devShell = pkgs.mkShell {
                    buildInputs = with pkgs; [
                        vscode-langservers-extracted
                        typescript-language-server
                        nodejs
                        bashInteractive
                        playwright-test
                    ];
                    shellHook = ''
                        export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
                        export PLAYWRIGHT_BROWSERS_PATH="${pkgs.playwright-driver.browsers}"
                    '';
                };
            });
}
