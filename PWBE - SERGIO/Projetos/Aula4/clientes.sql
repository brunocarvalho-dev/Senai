-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06/02/2024 às 15:37
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `clientes`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbl_cliente`
--

CREATE TABLE `tbl_cliente` (
  `id_clinete` int(11) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `endereco` varchar(80) NOT NULL,
  `telefone_celular` varchar(12) NOT NULL,
  `cpf` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbl_cliente`
--

INSERT INTO `tbl_cliente` (`id_clinete`, `nome`, `endereco`, `telefone_celular`, `cpf`) VALUES
(1, 'Edson Carvalho', 'rua um', '011999999999', '99999999999'),
(2, 'Bruno Carvlaho', 'Rua Dois', '011888888888', '88888888888'),
(3, 'Thais Alves', 'Rua Três', '011777777777', '77777777777'),
(4, 'Emilly Carvalho', 'Avenida Dez', '011666666666', '66666666666'),
(5, 'Jaqueline Gomes', 'Estrada Dezessete', '011555555555', '55555555555'),
(6, 'Rita de Casia', 'Rua Dois', '011444444444', '44444444444'),
(7, 'Janaina Gomes', 'Avenida Treze', '013333333333', '13131313131'),
(8, 'Thamilly Alves', 'Rua Quatorze', '011222222222', '22222222222'),
(9, 'Rilary Gomes', 'Avenida Vinte Um', '011111111111', '11111111111'),
(10, 'Igor Lucas', 'Avenida Treze', '011999999998', '98798798798'),
(11, 'Mirian Rodrigues', 'Avenida Vinte Dois', '011999999992', '98778998778'),
(12, 'Paulo da Silva', 'Rua Doze', '011999999993', '78998778979'),
(13, 'Caio Ribeiro', 'Rua Dez', '011998988767', '56432189076'),
(14, 'Thiago Almeida', 'Rua Quize', '011923454321', '34592843267'),
(15, 'Thiago Pereira', 'Rua Dois', '011933754321', '12332145665'),
(16, 'Amanda Paixão', 'Rua Quatro', '011876567342', '76546542456'),
(17, 'Bianca Love', 'Avenida Nove', '011987876567', '34254365762');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tbl_cliente`
--
ALTER TABLE `tbl_cliente`
  ADD PRIMARY KEY (`id_clinete`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbl_cliente`
--
ALTER TABLE `tbl_cliente`
  MODIFY `id_clinete` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
