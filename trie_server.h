#ifndef TRIE_SERVER_H__
#define TRIE_SERVER_H__

#pragma once
#include <string>
#include <vector>
#include "Trie.h"

// Forward declare Trie so we don't depend on the student's full header here.

// Start an HTTP server that exposes a Trie via simple HTTP endpoints that
// return plain text (no JSON libraries required).
// This call blocks the current thread until the server is stopped.
void start_trie_server(Trie& dict);

#endif //TRIE_SERVER_H__