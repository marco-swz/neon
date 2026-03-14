{
    description = "Development environment";

    inputs = {
        nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = inputs@{ self, nixpkgs, flake-utils, ... }:
        flake-utils.lib.eachSystem [ "x86_64-linux" ] (system:
            let
                pkgs = import nixpkgs {
                    inherit system;
                };

            in rec {
                devShell = pkgs.mkShell {
                    buildInputs = with pkgs; [
                        vscode-langservers-extracted
                        typescript-language-server
                        nodejs
                        bashInteractive
                        puppeteer-cli
                        chromium
                    ];
                    shellHook = ''
                        export PUPPETEER_SKIP_DOWNLOAD=true
                        export PUPPETEER_EXECUTABLE_PATH=${pkgs.chromium}/bin/chromium
                    '';
                };
            });
}
